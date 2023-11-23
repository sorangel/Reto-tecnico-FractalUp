import { createBrowserRouter } from "react-router-dom";
import { HomeView } from "../views/Home.view.tsx";
import { OneView } from "../views/One.view.tsx";
import { TwoView } from "../views/Two.view.tsx";
import { NotFoundView } from "../views/NotFound.view.tsx";

export const router = createBrowserRouter([
  { path: "/", element: <HomeView /> },
  { path: "/first", element: <OneView /> },
  { path: "/second", element: <TwoView /> },
  { path: "/*", element: <NotFoundView /> },
]);
