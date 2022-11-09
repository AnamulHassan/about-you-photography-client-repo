import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../Contexts/UserContext';
import Testimonial from '../Shared/Testimonial/Testimonial';

const MyReview = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);
  // console.log(user.email);
  useEffect(() => {
    fetch(`http://localhost:5000/review_data?email=${user?.email}`, {})
      .then(res => res.json())
      .then(data => {
        setReviews(data);
      });
  }, [user?.email]);
  console.log(reviews);
  return (
    <section className="w-10/12 mx-auto pb-24 mt-24 mb-8 ">
      <div></div>
      <div>
        {reviews &&
          reviews.map((review, index) => (
            <Testimonial key={index} reviewData={review}></Testimonial>
          ))}
      </div>
    </section>
  );
};

export default MyReview;
