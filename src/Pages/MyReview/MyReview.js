import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { FaSadTear } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/UserContext';
import Testimonial from '../Shared/Testimonial/Testimonial';

const MyReview = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);
  // console.log(reviews);
  useEffect(() => {
    fetch(`http://localhost:5000/my_review?email=${user?.email}`, {})
      .then(res => res.json())
      .then(data => {
        setReviews(data);
      });
  }, [user?.email]);
  return (
    <section className="w-10/12 mx-auto pb-24 mt-24 mb-8 ">
      <div>
        <h2 className="text-3xl text-center my-6 font-bold text-[#445c44]">
          Your Review
        </h2>
      </div>
      {reviews.length <= 0 && (
        <div className="flex justify-center">
          <h2 className="  my-8 inline-flex font-semibold items-center text-[#5e422d] bg-[#dbd7ce] border-2 px-10 py-2">
            No reviews were added <FaSadTear className="ml-2" />
          </h2>
        </div>
      )}

      <div>
        {reviews &&
          reviews.map((review, index) => (
            <Testimonial
              key={index}
              reviewData={review}
              setReviews={setReviews}
              reviews={reviews}
            ></Testimonial>
          ))}
      </div>
    </section>
  );
};

export default MyReview;
