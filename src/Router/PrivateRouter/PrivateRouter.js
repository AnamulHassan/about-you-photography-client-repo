import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const PrivateRouter = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="w-screen h-[80vh] flex justify-center items-center flex-col">
        <div className="mt-12">
          <div className="w-12 lg:w-16 h-12 lg:h-16 border-4 lg:border-8 border-dashed rounded-full animate-spin border-[#445c44]"></div>
          <h2 className="text-xl lg:text-2xl mt-2 font-semibold text-[#445c44]">
            Loading...
          </h2>
        </div>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default PrivateRouter;
