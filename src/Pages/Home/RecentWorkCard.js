import React from 'react';
import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';

const RecentWorkCard = ({ workData }) => {
  const { img1, img2, _id, details, event } = workData;
  return (
    <div className="w-10/12 mx-auto py-12 flex">
      <div className="w-1/2 relative my-12">
        <img className="w-full h-full" src={img1} alt="" />
        <img
          className="absolute w-[60%]  top-[80%] left-[45%] -translate-x-0 -translate-y-1/2 "
          src={img2}
          alt=""
        />
      </div>
      <div className="w-1/2 px-12 py-8">
        <h2 className="text-3xl font-bold tracking-tight mt-12 text-[#445c44]">
          {event}
        </h2>
        <p className="font-md text-[#939894] font-semibold">{details}</p>
        <div className="flex justify-center mt-12">
          <Link className="">
            <span className="h-24 w-24 rounded-full flex justify-center items-center opacity-30 hover:opacity-50 duration-200 bg-[#d1c0b9]">
              <HiPlus className="text-4xl" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecentWorkCard;
