import { LoginPage } from "../pages";
import PageNotFound from "../pages/PageNotFound";
import Welcome from "../pages/Welcome";
import { AppRoute } from "../types/appRoute";
import { loginPath, pageNotFoundPath, rootPath } from "./routesPath";

const appRoutes: AppRoute[] = [
  {
    path: rootPath,
    element: <Welcome />,
  },
  {
    path: loginPath,
    element: <LoginPage />,
  },
  {
    path: pageNotFoundPath,
    element: <PageNotFound />,
  },
];

export default appRoutes;
