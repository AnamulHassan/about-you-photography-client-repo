import React from 'react';
import { FaRegSadTear } from 'react-icons/fa';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const errorMessage = useRouteError();

  return (
    <section className="bg-[#dbd7ce] h-screen w-screen flex justify-center items-center flex-col">
      <FaRegSadTear className=" block text-[200px] text-[#906253]" />
      <h2 className="text-6xl font-bold bg-[#906253] text-[#e8e7e2] px-8 p-2 mt-8">
        {errorMessage.status}
      </h2>
      <h2 className="text-[#5e422d] text-4xl font-bold mt-4">
        {errorMessage.statusText}
      </h2>
      <Link
        style={{
          clipPath:
            'polygon(100% 0%, 90% 51%, 100% 100%, 25% 100%, 10% 50%, 25% 0%)',
        }}
        className="flex justify-center text-center cursor-pointer items-center text-xl font-bold hover:text-white pl-20 pr-14 duration-200 py-2 mt-8 bg-[#445c44] text-[#e8e7e2]"
        to="/"
      >
        Back to Home
      </Link>
    </section>
  );
};

export default ErrorPage;
