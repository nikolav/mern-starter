import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useAuthApi } from "../../hooks";
import { API_GRAPHQL } from "../store";

const httpLink = createHttpLink({
  uri: API_GRAPHQL,
});
// https://www.apollographql.com/docs/react/networking/authentication/#header
const ApolloGraphqlClientProvider = ({ children }) => {
  const { user } = useAuthApi();
  const authLink = setContext((_, { headers }) => {
    // get the authentication token
    const token = user?.accessToken;
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });
  //
  const apolloClient = new ApolloClient({
    // uri: API_GRAPHQL,
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
  //
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default ApolloGraphqlClientProvider;
