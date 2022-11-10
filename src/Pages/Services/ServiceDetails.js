import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { FaSadTear, FaSignInAlt, FaStar, FaTags } from 'react-icons/fa';
import Testimonial from '../Shared/Testimonial/Testimonial';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/UserContext';

const ServiceDetails = () => {
  const serviceInfo = useLoaderData();
  const location = useLocation();
  const { user, setStepBack } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const {
    _id,
    img1,
    img2,
    img3,
    img4,
    img5,
    serviceDetails,
    serviceName,
    servicePackage1,
    servicePackage2,
    serviceRating,
  } = serviceInfo;
  // console.log(serviceInfo);
  useEffect(() => {
    fetch(
      `https://about-you-photography-server.vercel.app/review_data?category=${serviceName}`,
      {}
    )
      .then(res => res.json())
      .then(data => {
        setReviews(data);
      });
  }, []);
  return (
    <section className="bg-[#dbd7ce] -mb-12">
      <div
        style={{ fontFamily: "'Nunito', sans-serif" }}
        className="w-11/12 lg:w-10/12 mx-auto pb-12 lg:pb-24 mt-6 lg:mt-12 mb-8 "
      >
        <div className=" grid grid-cols-2 pt-6 relative">
          <PhotoProvider>
            <PhotoView src={img1}>
              <img
                className="absolute cursor-pointer  scale-100 duration-200 z-10 hover:z-50 hover:scale-125 w-[50%] hover:border-4 hover:border-[#dbd7ce] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                src={img1}
                alt=""
              />
            </PhotoView>
            <PhotoView src={img2}>
              <img
                className=" blur-[1px] hover:blur-0 cursor-pointer hover:z-50 duration-200 hover:border-4 hover:border-[#dbd7ce] scale-100 hover:scale-110"
                src={img2}
                alt=""
              />
            </PhotoView>
            <PhotoView src={img3}>
              <img
                className=" blur-[1px] hover:blur-0  cursor-pointer hover:z-50 duration-200 hover:border-4 hover:border-[#dbd7ce] scale-100 hover:scale-125"
                src={img3}
                alt=""
              />
            </PhotoView>
            <PhotoView src={img4}>
              <img
                className=" blur-[1px] hover:blur-0  cursor-pointer hover:z-50 duration-200 hover:border-4 hover:border-[#dbd7ce] scale-100 hover:scale-125"
                src={img4}
                alt=""
              />
            </PhotoView>
            <PhotoView src={img5}>
              <img
                className="  blur-[1px] hover:blur-0 cursor-pointer hover:z-50 duration-200 hover:border-4 hover:border-[#dbd7ce] scale-100 hover:scale-125"
                src={img5}
                alt=""
              />
            </PhotoView>
          </PhotoProvider>
        </div>
        <div className="">
          <h2 className="text-4xl mt-4 mb-2 select-none font-extrabold tracking-tighter text-[#445c44]">
            {serviceName}
          </h2>
          <p className="text-[#353733] font-semibold select-none text-base mb-6">
            {serviceDetails}
          </p>
          <p className="text-xl font-[#353733] font-semibold">Package Rating</p>
          <ul className="flex  items-center">
            {[...Array(Math.ceil(+serviceRating)).keys()].map((_, index) => (
              <FaStar className="text-[#f59f00]" key={index} />
            ))}
            <li className="text-md font-bold ml-2 text-[#445c44]">
              {serviceRating}
            </li>
          </ul>
          <h2 className="text-4xl mt-4 font-bold text-center mb-6 tracking-tighter text-[#445c44]">
            Package Information
          </h2>
          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 select-none justify-around items-center">
            <ul className="bg-white py-10 px-8 w-11/12 lg:w-4/12">
              <li className="font-semibold text-2xl text-[#353733] text-center mb-2">
                Super Saver
              </li>
              {servicePackage1.map((list, index) => (
                <li
                  className="flex text-[#939894]  items-center font-semibold"
                  key={index}
                >
                  <FaTags className="text-xl mr-2" /> {list}
                </li>
              ))}
            </ul>
            <ul className="bg-white py-10 px-8 w-11/12 lg:w-4/12">
              <li className="font-semibold text-2xl text-[#353733] text-center  mb-2">
                Standard
              </li>
              {servicePackage2.map((list, index) => (
                <li
                  className="flex text-[#939894] items-center font-semibold"
                  key={index}
                >
                  <FaTags className="text-xl mr-2" /> {list}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-11/12 lg:w-10/12 mb-16 mx-auto">
        <h2 className="text-4xl mb-2 uppercase italic font-bold text-center tracking-tighter text-[#445c44]">
          Our Clients
        </h2>
        <p
          style={{ fontFamily: "'Dancing Script', cursive" }}
          className="text-center px-8 text-2xl font-semibold mb-10 text-[#353733]"
        >
          I&#39;ve been lucky to serve as creative work to some incredible
          clients over the years. Are you a new brand looking for a startup
          marketing program or custom web development? No problem. Are you an
          established company looking to embark on a new influencer marketing
          strategy — or maybe a fully integrated search, paid advertising and
          social media campaign? We&#39;re ready to help.
        </p>
        {reviews &&
          reviews.map((review, index) => (
            <Testimonial key={index} reviewData={review}></Testimonial>
          ))}
        {reviews.length === 0 && (
          <div className="flex justify-center">
            <h2 className="  my-8 inline-flex font-semibold items-center text-[#5e422d] bg-[#d1c0b9] border-2 text-xm lg:text-xl px-2 lg:px-10 py-2">
              There is no review in this service{' '}
              <FaSadTear className="ml-1 lg:ml-2" />
            </h2>
          </div>
        )}
        <div>
          <div>
            {!user?.email && (
              <Link
                onClick={() => setStepBack(location?.pathname)}
                to={`/add_review/${_id}`}
                className="inline-flex justify-center items-center text-center text-xl font-semibold hover:text-white  hover:mx-2 duration-200 px-8 py-2 mt-2 bg-[#445c44] text-[#e8e7e2]"
              >
                Sign in to add review <FaSignInAlt className="ml-2 text-2xl" />
              </Link>
            )}
          </div>

          {user?.uid && (
            <Link
              onClick={() => setStepBack(location?.pathname)}
              to={`/add_review/${_id}`}
              className="inline-flex justify-center items-center text-center text-xl font-semibold hover:text-white  hover:mx-2 duration-200 px-8 py-2 mt-2 bg-[#445c44] text-[#e8e7e2]"
            >
              Write your feedback <FaSignInAlt className="ml-2 text-2xl" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
