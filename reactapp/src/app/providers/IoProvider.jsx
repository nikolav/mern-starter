import { useEffect, createContext, useContext } from "react";
import io from "socket.io-client";
import { IO_SERVER } from "../store";
import { useStateReducer, useBrowser } from "../../hooks";

const IOContext = createContext();
export const useIO = () => useContext(IOContext);

const IOProvider = ({ children }) => {
  const client = useStateReducer({ socket: null });
  const { isReady } = useBrowser();
  useEffect(() => {
    if (isReady) {
      try {
        const socket = io(IO_SERVER, { withCredentials: true });
        if (!socket) throw `no io connection`;
        client.put(() => ({ socket }));
      } catch (error) {
        //
        console.error(error);
      }
    }
  }, [isReady]);
  //
  const { socket } = client();
  return <IOContext.Provider value={socket}>{children}</IOContext.Provider>;
};

export default IOProvider;
