import React from 'react';
import { useContext } from 'react';
import { FaPencilAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/UserContext';

const Testimonial = ({ reviewData }) => {
  const { user } = useContext(AuthContext);
  const { _id, img, email, name, rating, review } = reviewData;
  console.log(reviewData);
  return (
    <section className="bg-[#e8e7e2] mb-6 relative">
      <div className="flex items-center">
        <div className="w-1/4">
          <img className="h-full w-full" src={img} alt="" />
        </div>
        <div className="w-3/4  px-6">
          <p className="font-medium italic text-[#928979]">{review}</p>
          <p
            style={{ fontFamily: "'Dancing Script', cursive" }}
            className="mt-2 text-3xl font-bold text-[#445c44]"
          >
            {name}
          </p>
          <ul className="flex  items-center">
            {[...Array(Math.ceil(+rating)).keys()].map((_, index) => (
              <FaStar className="text-[#f59f00]" key={index} />
            ))}
            <li className="text-md font-bold ml-2 text-[#445c44]">{rating}</li>
          </ul>
        </div>
      </div>{' '}
      {user?.email === email && (
        <Link
          to={`/review_rewrite/${_id}`}
          className="absolute right-0 bottom-0 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        >
          {' '}
          <span className="w-12 h-12 rounded-full duration-200 text-[#445c44] hover:text-[#e8e7e2] hover:bg-[#928979] bg-[#dbd7ce] flex items-center justify-center">
            {' '}
            <FaPencilAlt className="text-2xl" />
          </span>
        </Link>
      )}
    </section>
  );
};

export default Testimonial;
