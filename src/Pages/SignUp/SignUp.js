import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const SignUp = () => {
  const handleSignup = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div>
      <div>
        <div className="relative min-h-screen mt-12 flex flex-col sm:justify-center items-center ">
          <div className="relative sm:max-w-sm w-full">
            <div className="card bg-[#295270] blur-md  w-full h-full  absolute  transform -rotate-3"></div>
            <div className="card bg-[#524175]  blur-md w-full h-full  absolute  transform rotate-3"></div>
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-[#dbd7ce] shadow-md">
              <h2 className="block mt-3 select-none text-2xl text-[#445c44] text-center font-semibold tracking-tight">
                Sign Up
              </h2>
              <p className="text-red-800 opacity-50 text-sm text-center font-semibold mb-[-20px]">
                Error Message
              </p>
              <div className="mt-10">
                <form onSubmit={handleSignup}>
                  <div>
                    <label
                      className="text-md select-none font-semibold text-[#939894] ml-6"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your Name"
                      className="mt-1 block w-full border-none bg-[#e8e7e2] h-11 rounded-md px-6 py-2  outline-none"
                    />
                  </div>
                  <div className="mt-2">
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

                  <div className="mt-2">
                    <label
                      className="text-md select-none font-semibold text-[#939894] ml-6"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      required
                      placeholder="Your Password"
                      className="mt-1 block w-full border-none bg-[#e8e7e2] h-11 rounded-md px-6 py-2  outline-none"
                    />
                  </div>
                  <div className="mt-2">
                    <label
                      className="text-md select-none font-semibold text-[#939894] ml-6"
                      htmlFor="passwordConfirm"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="passwordConfirm"
                      name="passwordConfirm"
                      required
                      placeholder="Confirm Password"
                      className="mt-1 block w-full border-none bg-[#e8e7e2] h-11 rounded-md px-6 py-2  outline-none"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <input
                      type="submit"
                      className=" px-10  text-center text-md font-bold hover:text-white rounded-full cursor-pointer duration-200 py-2 mt-4 bg-[#445c44] text-[#e8e7e2]"
                      value="Sign up"
                    />
                  </div>
                </form>

                <div className="flex mt-4 items-center text-center">
                  <hr className="border-[#939894] border-1 w-full rounded-md" />
                  <label className="block font-medium text-sm text-[#939894] w-full">
                    OR
                  </label>
                  <hr className="border-[#939894] border-1 w-full rounded-md" />
                </div>
                <SocialLogin></SocialLogin>
                <div className="mt-2 mb-6">
                  <div className="flex justify-center items-center text-sm">
                    <p className="mr-2  text-[#939894]">
                      {' '}
                      Already you have an account
                    </p>
                    <Link
                      to="#"
                      className="text-[#3d8aa4] duration-200 font-bold hover:text-[#445c44]"
                    >
                      Sign in
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

export default SignUp;
