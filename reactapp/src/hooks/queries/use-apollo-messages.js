import useApollo from "../use-apollo";
import { Q__MESSAGES } from "../../app/store";

const useApolloMessages = () => {
  const query = useApollo(Q__MESSAGES);
  const { data } = query;
  const resource = data?.messages || null;
  //
  return { resource, query };
};

export default useApolloMessages;
