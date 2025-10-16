import { SignInView } from "../pages/SignIn/SignIn.view";
import { SignUpView } from "../pages/SignUp/SignUp.view";
import { HomeView } from "../pages/Home/Home.view";
import { Dashboard } from "../pages/Dashboards/Dashboard.view";
import { createBrowserRouter } from "react-router";
import { PrivateRouteProvider } from "./components/PrivateRouteProvider";

export const router = createBrowserRouter([
  
  
  {
    path: "/",
    element: (
      <PrivateRouteProvider>
        <HomeView />
      </PrivateRouteProvider>
    ),
  },
  {
    path: "/auth/login",
    element: <SignInView />,
  },
  {
    path: "/seller/register",
    element: <SignUpView />,
  },
   {
    path: "/dashboard", //rota ainda não existe, precisamos criar no back
    element: (
      <PrivateRouteProvider>
        <Dashboard />
      </PrivateRouteProvider>
    ),
  },
]);
