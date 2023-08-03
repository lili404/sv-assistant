import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from 'react-router-dom';

import HomePage from '../pages/Analyzer';
import ErrorPage from '../pages/error/error-page';

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