import React from 'react';
import { FaExternalLinkSquareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ serviceData }) => {
  const {
    _id,
    img1,
    serviceName,
    serviceRating,
    servicePackage1,
    serviceDetails,
  } = serviceData;
  return (
    <div className="bg-white">
      <div>
        <img className="" src={img1} alt="" />
      </div>
      <div className="py-4 px-3">
        <p className="text-2xl text-start font-semibold text-[#353733]">
          {serviceName}
        </p>
        <p className="text-base text-start font-semibold mt-2 text-[#939894]">
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
            <ul className="flex  items-center">
              {[...Array(Math.ceil(+serviceRating)).keys()].map((_, index) => (
                <FaStar className="text-[#f59f00]" key={index} />
              ))}
              <li className="text-md font-bold ml-2 text-[#445c44]">
                {serviceRating}
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Link
            to={`/services/${_id}`}
            className="flex justify-center items-center text-center text-xl font-bold hover:text-white hover:rounded-full hover:mx-2 duration-200 py-4 mt-4 bg-[#445c44] text-[#e8e7e2]"
          >
            View Details <FaExternalLinkSquareAlt className="ml-2 text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
