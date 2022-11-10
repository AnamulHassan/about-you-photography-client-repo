import Main from '../../Layout/Main';
import About from '../../Pages/About/About';
import AddReview from '../../Pages/AddReview/AddReview';
import AddService from '../../Pages/AddService/AddService';
import Blog from '../../Pages/Blog/Blog';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Home from '../../Pages/Home/Home';
import MyReview from '../../Pages/MyReview/MyReview';
import PreviewWork from '../../Pages/PreviewWork/PreviewWork';
import Profile from '../../Pages/Profile/Profile';
import ResetPassword from '../../Pages/ResetPassword/ResetPassword';
import ReviewRewrite from '../../Pages/ReviewRewrite/ReviewRewrite';
import ServiceDetails from '../../Pages/Services/ServiceDetails';
import Services from '../../Pages/Services/Services';
import SignIn from '../../Pages/SignIn/SignIn';
import SignUp from '../../Pages/SignUp/SignUp';
import PrivateRouter from '../PrivateRouter/PrivateRouter';

const { createBrowserRouter } = require('react-router-dom');

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        loader: () =>
          fetch('https://about-you-photography-server.vercel.app/services'),
        element: <Services></Services>,
      },
      {
        path: '/services/:serviceId',
        loader: ({ params }) =>
          fetch(
            `https://about-you-photography-server.vercel.app/services/${params.serviceId}`
          ),
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: '/review_rewrite/:reviewId',
        loader: ({ params }) =>
          fetch(
            `https://about-you-photography-server.vercel.app/review_rewrite/${params.reviewId}`
          ),
        element: (
          <PrivateRouter>
            <ReviewRewrite></ReviewRewrite>
          </PrivateRouter>
        ),
      },
      {
        path: '/my_review',
        element: (
          <PrivateRouter>
            <MyReview></MyReview>
          </PrivateRouter>
        ),
      },
      {
        path: '/add_service',
        element: (
          <PrivateRouter>
            <AddService></AddService>
          </PrivateRouter>
        ),
      },
      {
        path: '/add_review/:id',
        loader: ({ params }) =>
          fetch(
            `https://about-you-photography-server.vercel.app/services/${params.id}`
          ),
        element: (
          <PrivateRouter>
            <AddReview></AddReview>
          </PrivateRouter>
        ),
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/preview_work',
        element: <PreviewWork></PreviewWork>,
      },
      {
        path: '/profile',
        element: (
          <PrivateRouter>
            <Profile></Profile>
          </PrivateRouter>
        ),
      },
    ],
  },
]);
export default Router;
