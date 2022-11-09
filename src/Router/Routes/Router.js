import Main from '../../Layout/Main';
import AddService from '../../Pages/AddService/AddService';
import Home from '../../Pages/Home/Home';
import MyReview from '../../Pages/MyReview/MyReview';
import ResetPassword from '../../Pages/ResetPassword/ResetPassword';
import ReviewRewrite from '../../Pages/ReviewRewrite/ReviewRewrite';
import ServiceDetails from '../../Pages/Services/ServiceDetails';
import Services from '../../Pages/Services/Services';
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
      {
        path: '/services',
        loader: () => fetch('http://localhost:5000/services'),
        element: <Services></Services>,
      },
      {
        path: '/services/:serviceId',
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.serviceId}`),
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: '/review_rewrite/:reviewId',
        loader: ({ params }) =>
          fetch(`http://localhost:5000/review_rewrite/${params.reviewId}`),
        element: <ReviewRewrite></ReviewRewrite>,
      },
      {
        path: '/my_review',
        element: <MyReview></MyReview>,
      },
      {
        path: '/add_service',
        element: <AddService></AddService>,
      },
    ],
  },
]);
export default Router;
