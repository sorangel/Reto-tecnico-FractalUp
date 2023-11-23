import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClientService = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
});
