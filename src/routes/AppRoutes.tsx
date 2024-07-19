import PageNotFound from "../pages/PageNotFound";
import Welcome from "../pages/Welcome";
import { AppRoute } from "../types/appRoute";
import { pageNotFoundPath, rootPath } from "./routesPath";

const appRoutes: AppRoute[] = [
  {
    path: rootPath,
    element: <Welcome />,
  },
  {
    path: pageNotFoundPath,
    element: <PageNotFound />,
  },
];

export default appRoutes;
