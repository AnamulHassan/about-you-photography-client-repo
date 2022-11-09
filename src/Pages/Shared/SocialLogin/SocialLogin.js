import React from 'react';
import { useContext } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../Contexts/UserContext';

const SocialLogin = () => {
  const { setUser, setError, googleSignIn, facebookSignIn } =
    useContext(AuthContext);
  const handleFacebookLogin = () => {
    facebookSignIn()
      .then(result => setUser(result.user))
      .catch(error => setError(error));
  };
  const handleGoogleLogin = () => {
    googleSignIn()
      .then(result => setUser(result.user))
      .catch(error => setError(error));
  };
  return (
    <div>
      <div className="flex justify-center w-full">
        <button
          onClick={handleFacebookLogin}
          className=" px-6 mr-1 flex items-center justify-center  text-center text-md font-bold bg-[#dbd7ce] rounded-full duration-200 py-2 mt-4 text-[#4b69b0] hover:bg-[#e8e7e2]"
        >
          <FaFacebook className="mr-2 text-2xl" /> Facebook
        </button>

        <button
          onClick={handleGoogleLogin}
          className=" px-6 ml-2 flex items-center justify-center text-center text-md font-bold bg-[#dbd7ce] rounded-full duration-200 py-2 mt-4 text-[#e83f3a] hover:bg-[#e8e7e2]"
        >
          <FcGoogle className="mr-2 text-2xl" />
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
