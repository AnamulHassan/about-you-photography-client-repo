import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const ResetPassword = () => {
  const { forgetPassword, error, setError } = useContext(AuthContext);
  const handleResetPassword = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    forgetPassword(email)
      .then(result => {
        console.log(result);
        toast.success('Check your email to reset your password', {
          style: {
            border: '4px solid #445c44',
            padding: '16px',
            BackgroundColor: '#dbd7ce',
            fontSize: '20px',
            fontWeight: '600',
          },
        });
      })
      .catch(error => setError(error.message));
  };
  return (
    <div>
      <div>
        <div className="relative min-h-screen flex flex-col sm:justify-center items-center ">
          <div className="relative sm:max-w-sm w-full">
            <div className="card bg-[#295270] blur-md  w-full h-full  absolute  transform -rotate-3"></div>
            <div className="card bg-[#524175]  blur-md w-full h-full  absolute  transform rotate-3"></div>
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-[#dbd7ce] shadow-md">
              <h2 className="block mt-3 select-none text-2xl text-[#445c44] text-center font-semibold tracking-tight">
                Reset Password
              </h2>
              {error && (
                <p className="text-red-800 opacity-50 text-sm text-center font-semibold mb-[-20px]">
                  {error}
                </p>
              )}
              <div className="mt-10">
                <form onSubmit={handleResetPassword}>
                  <div>
                    <label
                      className="text-md select-none font-semibold text-[#939894] ml-6"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="Your Email"
                      className="mt-1 block w-full border-none bg-[#e8e7e2] h-11 rounded-md px-6 py-2  outline-none"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <input
                      type="submit"
                      className=" px-10  text-center text-md font-bold hover:text-white rounded-full cursor-pointer duration-200 py-2 mt-4 bg-[#445c44] text-[#e8e7e2]"
                      value="Continue"
                    />
                  </div>
                </form>

                <div className="mt-2 mb-6">
                  <div className="flex justify-center items-center text-sm">
                    <p className="mr-2  text-[#939894]">
                      {' '}
                      Do you want to create new one?
                    </p>
                    <Link
                      to="/signup"
                      className="text-[#3d8aa4] duration-200 font-bold hover:text-[#445c44]"
                    >
                      Create new
                    </Link>
                  </div>
                  <div className="flex justify-center mt-4">
                    <Link
                      to="/signin"
                      className="text-center border-[#dbd7ce] text-lg border-b-[1px] hover:border-[#445c44] duration-200 flex items-center leading-4 font-semibold text-[#445c44]"
                    >
                      Back Sign in <FaArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
