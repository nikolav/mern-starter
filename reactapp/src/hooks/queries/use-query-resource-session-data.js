import axios from "axios";
import qs from "qs";
import { useQueryResourceCustom } from "../use-query-resource";
import { stripEndSlashes } from "../../util";
import { AUTH_API_URL_session } from "../../app/store";

const useQueryResourceSessionData = (user = null, config = {}) => {
  const enabled = !!(user?.id && user?.accessToken && user?.sessionToken);
  return useQueryResourceCustom(queryFnSessionData, "session", {
    enabled,
    ...config,
  });
};

export default useQueryResourceSessionData;

async function queryFnSessionData({
  queryKey: [_prefix, userId, accessToken, sessionToken],
}) {
  let sessionData = null;
  try {
    if (userId && accessToken && sessionToken) {
      const { data } = await axios({
        method: "post",
        url: `${stripEndSlashes(AUTH_API_URL_session)}/${userId}`,
        data: qs.stringify({ sessionToken }),
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      //
      sessionData = data;
    }
  } catch (error) {
    console.error({ error });
  }

  return sessionData;
}
