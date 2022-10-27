import { useEffect, useState, createContext, useContext } from "react";
import {
  // useQueryResourceBase,
  useQueryMain,
  useAuthApi,
} from "../../hooks";

const ResourceMainContext = createContext();

export const useResourceMain = () => useContext(ResourceMainContext);
////
////
export function ResourceMainProvider({ children }) {
  const { user } = useAuthApi();
  const enabled = null != user?.accessToken;
  const [resource, setResource] = useState(null);
  const query = useQueryMain({ enabled, accessToken: user?.accessToken });
  const { error, isLoading, data } = query;

  useEffect(() => {
    if (!isLoading && error) return;
    if (!isLoading && !error && data) setResource(data);
  }, [error, isLoading, data]);

  useEffect(() => {
    setResource(enabled ? data : null);
  }, [enabled]);

  const value = { resource, query };
  //
  return (
    <ResourceMainContext.Provider value={value}>
      {children}
    </ResourceMainContext.Provider>
  );
}
