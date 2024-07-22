import { LoginPage, RegistrationPage } from "../pages";
import PageNotFound from "../pages/PageNotFound";
import Welcome from "../pages/Welcome";
import { AppRoute } from "../types/appRoute";
import {
  loginPath,
  pageNotFoundPath,
  registrationPath,
  rootPath,
} from "./routesPath";

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
    path: registrationPath,
    element: <RegistrationPage />,
  },
  {
    path: pageNotFoundPath,
    element: <PageNotFound />,
  },
];

export default appRoutes;
