import Main from '../../Layout/Main';
import Home from '../../Pages/Home/Home';
import ResetPassword from '../../Pages/ResetPassword/ResetPassword';
import SignIn from '../../Pages/SignIn/SignIn';
import SignUp from '../../Pages/SignUp/SignUp';

const { createBrowserRouter } = require('react-router-dom');

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      { path: '/', element: <Home></Home> },
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
      {
        path: '/reset_password',
        element: <ResetPassword></ResetPassword>,
      },
    ],
  },
]);
export default Router;
