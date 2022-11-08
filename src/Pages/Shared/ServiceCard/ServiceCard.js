import React from 'react';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ serviceData }) => {
  const { img1, serviceName, serviceRating, servicePackage1, serviceDetails } =
    serviceData;
  // console.log(serviceData);
  return (
    <div className="bg-white">
      <div>
        <img className="" src={img1} alt="" />
      </div>
      <div className="py-4 px-3">
        <p className="text-2xl font-semibold text-[#353733]">{serviceName}</p>
        <p className="text-base font-semibold mt-2 text-[#939894]">
          {serviceDetails.slice(0, 100) + '...'}
        </p>
        <div className="flex justify-between mt-3">
          <div className="flex items-start flex-col">
            <p className=" text-md font-semibold text-[#5e422d]">
              Package Value
            </p>
            <p className="text-xl font-bold text-[#906253]">
              {servicePackage1[9]}
            </p>
          </div>
          <div className="flex items-start flex-col">
            <p className=" text-md font-semibold text-[#5e422d]">
              Package Rating
            </p>
            <p className="text-xl font-bold text-[#906253]">{serviceRating}</p>
          </div>
        </div>
        <div>
          <Link className="flex justify-center items-center text-center text-xl font-bold hover:text-white hover:rounded-full hover:mx-2 duration-200 py-4 mt-4 bg-[#445c44] text-[#e8e7e2]">
            View Details <FaExternalLinkSquareAlt className="ml-2 text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
