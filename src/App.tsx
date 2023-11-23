import { RouterProvider } from "react-router-dom";
import { router } from "./infrastructure/routes/router.tsx";
import "./infrastructure/styles/global.scss";
import { ApolloProvider } from "@apollo/client";
import { apolloClientService } from "./infrastructure/services/apolloClient.service.tsx";

export const App = (): JSX.Element => {
  return (
    <ApolloProvider client={apolloClientService}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
};
