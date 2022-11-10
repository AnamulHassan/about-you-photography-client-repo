import React from 'react';
import { FaCheckSquare } from 'react-icons/fa';

const Features = () => {
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto py-12">
      <div className="text-center">
        <h4 className="text-xs lg:text-lg uppercase tracking-tighter font-semibold text-[#bbbcbb]">
          Even the most confident person needs a little help
        </h4>
        <h2
          style={{ fontFamily: "'Roboto Slab', sans-serif" }}
          className="text-3xl lg:text-5xl text-[#445c44] tracking-tight font-bold uppercase mb-6"
        >
          You can take a good photo
        </h2>
      </div>
      <div className="w-full flex flex-col space-y-8 lg:space-y-0 lg:flex-row justify-center items-center">
        <ul className="w-11/12 lg:w-1/3">
          <li className="text-xl lg:text-2xl font-semibold uppercase mb-2 text-[#353733]">
            Launch Your Website
          </li>
          <li className="text-xs lg:text-base mt-2 flex items-center justify-start font-semibold text-[#939894]">
            <FaCheckSquare className="text-lg lg:text-2xl mr-2" /> Get lots of
            compliments on your photos
          </li>
          <li className="text-xs lg:text-base mt-2 flex items-center justify-start font-semibold text-[#939894]">
            <FaCheckSquare className="text-lg lg:text-2xl mr-2" /> Look your
            best
          </li>
          <li className="text-xs lg:text-base mt-2 flex items-center justify-start font-semibold text-[#939894]">
            <FaCheckSquare className="text-lg lg:text-2xl mr-2" /> Shine with
            confidence
          </li>
        </ul>
        <ul className="w-11/12 lg:w-1/3">
          <li className="text-xl lg:text-2xl font-semibold uppercase mb-2 text-[#353733]">
            Promote Your Business
          </li>
          <li className="text-xs lg:text-base mt-2 flex items-center justify-start font-semibold text-[#939894]">
            <FaCheckSquare className="text-lg lg:text-2xl mr-2" /> Establish
            your authority
          </li>
          <li className="text-xs lg:text-base mt-2 flex items-center justify-start font-semibold text-[#939894]">
            <FaCheckSquare className="text-lg lg:text-2xl mr-2" /> Elevate your
            Linkedin profile
          </li>
          <li className="text-xs lg:text-base mt-2 flex items-center justify-start font-semibold text-[#939894]">
            <FaCheckSquare className="text-lg lg:text-2xl mr-2" /> Make more
            money
          </li>
        </ul>
        <ul className="w-11/12 lg:w-1/3">
          <li className="text-xl lg:text-2xl font-semibold uppercase mb-2 text-[#353733]">
            Show case your Talents
          </li>
          <li className="text-xs lg:text-base mt-2 flex items-center justify-start font-semibold text-[#939894]">
            <FaCheckSquare className="text-2xl mr-2" />
            Standout to casting directors
          </li>
          <li className="text-xs lg:text-base mt-2 flex items-center justify-start font-semibold text-[#939894]">
            <FaCheckSquare className="text-2xl mr-2" /> Display your versatility
          </li>
          <li className="text-xs lg:text-base mt-2 flex items-center justify-start font-semibold text-[#939894]">
            <FaCheckSquare className="text-2xl mr-2" /> Apply for roles with
            confidence
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
