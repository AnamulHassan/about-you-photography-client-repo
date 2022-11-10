import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { FaSadTear } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import Testimonial from '../Shared/Testimonial/Testimonial';

const MyReview = () => {
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();
  const { user, logOutUser } = useContext(AuthContext);
  useEffect(() => {
    fetch(
      `https://about-you-photography-server.vercel.app/my_review?email=${user?.email}`,
      {
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${JSON.parse(
            localStorage.getItem('ayp-token')
          )}`,
        },
      }
    )
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          navigate('/signin');
          return logOutUser()
            .then(() => {})
            .catch(error => console.error(error));
        }
        return res.json();
      })
      .then(data => {
        setReviews(data);
      });
  }, [user?.email, logOutUser, navigate]);
  return (
    <section className="w-11/12 lg:w-10/12 mx-auto pb-18 mt-8 mb-8 ">
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
          reviews?.map((review, index) => (
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
