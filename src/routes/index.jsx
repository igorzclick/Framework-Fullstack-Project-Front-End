import { SignInView } from '../pages/SignIn/SignIn.view';
import { SignUpView } from '../pages/SignUp/SignUp.view';
import { HomeView } from '../pages/Home/Home.view';
import { createBrowserRouter } from 'react-router';
import { PrivateRouteProvider } from './components/PrivateRouteProvider';
import { ListProductsview } from '../pages/Products/ListProducts.view';
import { Layout } from '../components/layout';
import { DashboardView } from '../pages/Dashboards/Dashboard.view';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateRouteProvider>
        <HomeView />
      </PrivateRouteProvider>
    ),
  },
  {
    path: '/auth/login',
    element: <SignInView />,
  },
  {
    path: '/seller/register',
    element: <SignUpView />,
  },
  {
    path: '/products',
    element: (
      <PrivateRouteProvider>
        <Layout activeKey='products'>
          <ListProductsview />
        </Layout>
      </PrivateRouteProvider>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRouteProvider>
        <Layout activeKey='dashboard'>
          <DashboardView />
        </Layout>
      </PrivateRouteProvider>
    ),
    //   children: [{
    //   path: "/sei",
    //   element: (
    //     <PrivateRouteProvider>
    //       <HomeView />
    //     </PrivateRouteProvider>
    //   ),
    // },]
  },
]);
