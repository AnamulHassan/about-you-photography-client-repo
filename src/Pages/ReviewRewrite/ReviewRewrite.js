import React, { useContext } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const ReviewRewrite = () => {
  const { stepBack } = useContext(AuthContext);
  const oldReviewData = useLoaderData();
  const navigate = useNavigate();
  const { _id, email, img, name, rating, review } = oldReviewData[0];
  const [error, setError] = useState('');
  const handleChangeReview = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.imgUrl.value;
    const rating = form.userRating.value;
    const review = form.review.value;
    if (rating > 5 || rating < 0 || rating === '') {
      setError('rating should be 0 to 5');
      return;
    }
    const updateReview = {
      name,
      photoUrl,
      rating,
      review,
    };
    fetch(
      `https://about-you-photography-server.vercel.app/review_rewrite/${_id}`,
      {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(updateReview),
      }
    )
      .then(res => res.json())
      .then(result => {
        if (result.modifiedCount > 0) {
          navigate(stepBack);
          form.reset();
          toast.success('Review Updated Successfully', {
            style: {
              border: '4px solid #445c44',
              padding: '16px',
              BackgroundColor: '#dbd7ce',
              fontSize: '20px',
              fontWeight: '600',
            },
          });
        } else {
          toast.error("You din't change anything", {
            style: {
              border: '4px solid #e03131',
              padding: '16px',
              BackgroundColor: '#dbd7ce',
              fontSize: '20px',
              fontWeight: '600',
            },
          });
        }
      })
      .catch(error => console.error(error));
  };

  return (
    <section
      style={{ fontFamily: "'Nunito', sans-serif" }}
      className="text-[#353733] mt-12 py-8 lg:py-12 px-2 lg:px-8 w-11/12 lg:w-8/12 mx-auto bg-[#dbd7ce]"
    >
      <h1 className="text-center font-bold mb-8 lg:mb-2 text-3xl ">
        Re-write Your Review
      </h1>
      <form onSubmit={handleChangeReview}>
        <div className="">
          <label
            className="text-lg lg:text-2xl ml-4 lg:ml-8 font-semibold block select-none mb-1 lg:mb-2"
            htmlFor="name"
          >
            Your name
          </label>
          <input
            className="block w-full px-4 lg:px-8 py-2 mb-2 text-md lg:text-xl font-semibold outline-none border-2 border-[#939894]"
            defaultValue={name}
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div>
          <label
            className="text-lg lg:text-2xl ml-4 lg:ml-8 font-semibold block select-none mb-1 lg:mb-2"
            htmlFor="imgUrl"
          >
            Your Photo Url
          </label>
          <input
            className="block w-full px-4 lg:px-8 py-2 mb-2 text-md lg:text-xl font-semibold outline-none border-2 border-[#939894]"
            defaultValue={img}
            type="text"
            name="imgUrl"
            id="imgUrl"
          />
        </div>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label
              className="text-lg lg:text-2xl ml-4 lg:ml-8 font-semibold block select-none mb-1 lg:mb-2"
              htmlFor=""
            >
              Your Email
            </label>
            <input
              className="block w-full px-4 lg:px-8 py-2 mb-2 text-md lg:text-xl font-semibold outline-none border-2 border-[#939894]"
              type="email"
              name="email"
              id="email"
              defaultValue={email}
              readOnly
            />
          </div>
          <div className="w-1/2">
            <label
              className="text-lg lg:text-2xl ml-4 lg:ml-8 font-semibold block select-none mb-1 lg:mb-2"
              htmlFor="userRating"
            >
              Your Rating
            </label>
            <input
              className="block w-full px-4 lg:px-8 py-2 mb-2 text-md lg:text-xl font-semibold outline-none border-2 border-[#939894]"
              type="text"
              name="userRating"
              id="userRating"
              defaultValue={rating}
            />
          </div>
        </div>
        <div>
          <label
            className="text-lg lg:text-2xl ml-4 lg:ml-8 font-semibold block select-none mb-1 lg:mb-2"
            htmlFor="review"
          >
            Re-write Review
          </label>
          <textarea
            className="block w-full px-8 py-2 mb-2 text-md lg:text-xl font-semibold outline-none border-2 border-[#939894]"
            name="review"
            id="review"
            cols="20"
            rows="5"
            defaultValue={review}
          ></textarea>
        </div>
        <div className="flex justify-between items-center">
          <div>
            {error && (
              <p className="text-md font-semibold text-red-700 opacity-70">
                {error}
              </p>
            )}
          </div>

          <div className="flex space-x-6">
            {stepBack && (
              <Link
                to={stepBack}
                className="flex justify-center items-center text-center text-xl font-bold hover:text-white   px-8 duration-200 py-2 mt-4 bg-[#445c44] text-[#e8e7e2]"
              >
                Back
              </Link>
            )}
            <input
              type="submit"
              value="Continue "
              className="flex justify-center items-center text-center text-xl font-bold hover:text-white cursor-pointer  px-8 duration-200 py-2 mt-4 bg-[#445c44] text-[#e8e7e2]"
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default ReviewRewrite;
