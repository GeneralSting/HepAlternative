import PageNotFound from "../pages/PageNotFound";
import Welcome from "../pages/Welcome";
import { AppRoute } from "../types/appRoute";

const appRoutes: AppRoute[] = [
  {
    path: "/",
    element: <Welcome />
  },
  {
    path: "*",
    element: <PageNotFound />
  }  
];

export default appRoutes;
