import { useEffect } from "react";
import useQueryResourceSessionData from "./queries/use-query-resource-session-data";
//
const useAuthApiSessionData = (user = null) => {
  const {
    fetch: fetchSession,
    query: { data: session },
  } = useQueryResourceSessionData(user);

  const ID = user?.id;
  const AT = user?.accessToken;
  const ST = user?.sessionToken;

  useEffect(() => {
    if (ID && AT && ST) fetchSession([ID, AT, ST]);
  }, [ID, AT, ST]);

  return user ? session : null;
};

export default useAuthApiSessionData;
