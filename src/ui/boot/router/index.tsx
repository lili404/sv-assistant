import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from 'react-router-dom';

import HomePage from '../../pages/analyzer/index';
import ErrorPage from '../../pages/error/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        
      },
    ],
  },
]);

const Router: React.FC = () => <RouterProvider router={router} />

export default Router;