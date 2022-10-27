import { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";
import qs from "qs";
import { pick, stripEndSlashes } from "../util";
import {
  AUTH_API_URL,
  AUTH_API_URL_register,
  AUTH_API_URL_users,
  // AUTH_API_URL_logout,
  AUTH_SESSION_TOKEN,
} from "../app/store";
import useAuthApiSessionData from "./use-auth-api-session-data";

const reIdTokens = /^(.*?)\.\.(.*?)\.\.(.*?)$/;

const isValidAuthData = (authData) => null != authData?.accessToken;
const authDataFromResponse = ({ user, token }) => ({
  ...user,
  ...pick(token, ["accessToken", "sessionToken", "refreshToken"]),
});
//
const AuthApiContext = createContext();
export const useAuthApi = () => useContext(AuthApiContext);

// -- api.endpoints x2; @auth, @users
//   POST ${AUTH_API_URL}             # auth, token
//   POST ${AUTH_API_URL_auth.users}  # +user
//   GET  ${AUTH_API_URL_users}       # fetch user info
export const AuthApiProvider = ({ children }) => {
  const [authSession, setAuthSession] = useState({
    // flags
    error: null,
    processing: null,

    user: null,
    session: null,
  });

  const authSessionApi = {
    authenticate: authenticate_,
    logout: logout_,
    register: register_,
  };

  const authSessionValue = {
    ...authSession,
    ...authSessionApi,
  };

  // manage auth state
  const authStatusError = (error) => setAuthSession((s) => ({ ...s, error }));
  const authStatusProcessingOff = () =>
    setAuthSession((s) => ({ ...s, processing: false }));
  const setAuth = (user) => setAuthSession((sess) => ({ ...sess, user }));
  const setSessionData = (session) =>
    setAuthSession((sess) => ({ ...sess, session }));

  // auth helper, load session data when @logged-in
  const session = useAuthApiSessionData(authSession.user);
  useEffect(() => {
    setSessionData(session);
  }, [session]);

  // cache session creds, enable auto login @mount
  useEffect(() => {
    try {
      const ID = authSession.user.id;
      const AT = authSession.user.accessToken;
      const ST = authSession.user.sessionToken;
      if (ID && AT && ST)
        localStorage.setItem(AUTH_SESSION_TOKEN, `${ID}..${AT}..${ST}`);
    } catch {
      // ignore
    }
  }, [
    authSession.user?.id,
    authSession.user?.accessToken,
    authSession.user?.sessionToken,
  ]);

  // auto login @mount from localStorage
  useEffect(() => {
    loadSession_();
  }, []);

  return (
    <AuthApiContext.Provider value={authSessionValue}>
      {children}
    </AuthApiContext.Provider>
  );

  // -- api.accessToken
  //   creds:
  //     email:     string.unique.required;
  //     password:  string.required;
  async function authenticate_(creds) {
    let authData;
    authStatusBegin();

    try {
      const { data } = await axios({
        method: "post",
        url: AUTH_API_URL,
        data: qs.stringify(creds),
      });
      authData = authDataFromResponse(data);
      if (!isValidAuthData(authData))
        throw { "bad request; @authenticate_": authData };
      //
      setAuth(authData);
    } catch (error) {
      authStatusError(error);
    } finally {
      authStatusProcessingOff();
    }
    //
    return authData;
  }

  // -- user.create
  //   creds:
  //     name:      string.required;
  //     email:     string.unique.required;
  //     password:  string.required;
  async function register_(creds) {
    let authData;
    authStatusBegin();

    try {
      const { data } = await axios({
        method: "post",
        url: AUTH_API_URL_register,
        data: qs.stringify(creds),
      });
      authData = authDataFromResponse(data);
      if (!isValidAuthData(authData))
        throw { "bad request: @register_": authData };

      await authenticate_(pick(creds, ["email", "password"]));
    } catch (error) {
      authStatusError(error);
    } finally {
      authStatusProcessingOff();
    }
  }

  // creds @localStorage
  //   id:    string.id;
  //   token: <jwt-token>;
  async function loadSession_() {
    let authData;
    authStatusBegin();

    try {
      const { id, token, sessionToken } = ((m) => ({
        id: m[1],
        token: m[2],
        sessionToken: m[3],
      }))(reIdTokens.exec(localStorage.getItem(AUTH_SESSION_TOKEN)));
      //
      if (id && token) {
        const { data } = await axios({
          method: "get",
          url: `${stripEndSlashes(AUTH_API_URL_users)}/${encodeURI(id)}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        //
        authData = authDataFromResponse({
          token: { accessToken: token, sessionToken, refreshToken: null },
          user: { id, ...data },
        });

        if (isValidAuthData(authData)) setAuth(authData);
      }
    } catch {
      // ignore
    } finally {
      authStatusProcessingOff();
    }
  }

  // clear session
  async function logout_() {
    let logoutError;
    try {
      // clear local auth
      setAuthSession((sess) => ({
        ...sess,
        user: null,
        error: null,
        processing: false,
      }));

      // clear local cache, disable auth reload
      localStorage.removeItem(AUTH_SESSION_TOKEN);

      // // no hard logout here
      // //   preserve server session in db
      // //   dont expire tokens automatically
      // //   .. clear session mannualy
      // await axios({
      //   method: "delete",
      //   url: `${stripEndSlashes(AUTH_API_URL_logout)}/${authSession.user?._id}`,
      //   data: qs.stringify({ sessionToken: authSession.user?.sessionToken }),
      //   headers: {
      //     Authorization: `Bearer ${authSession.user?.accessToken}`,
      //   },
      // });
    } catch (error) {
      logoutError = error;
    }
    //
    if (logoutError) console.error(logoutError);
  }

  // reset auth-status before hiting api
  function authStatusBegin() {
    setAuthSession((sess) => ({
      ...sess,
      error: null,
      processing: true,
    }));
  }
};
