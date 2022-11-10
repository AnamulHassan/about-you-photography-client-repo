import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const PrivateRouter = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <h3 className="text-center py-24 text-2xl">Loading...</h3>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default PrivateRouter;

{
  /* <div>
    <div style="border-top-color:transparent"
        class="w-16 h-16 border-4 border-red-400 border-double rounded-full animate-spin"></div>
</div> */
}
