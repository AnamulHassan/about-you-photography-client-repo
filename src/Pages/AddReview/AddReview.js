import React, { useContext } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const AddReview = () => {
  const service = useLoaderData();
  const category = service.serviceName;

  const { user, stepBack } = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleAddReview = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const img = form.imgUrl.value;
    const rating = form.userRating.value;
    const review = form.review.value;
    const email = user?.email || '';
    const date = new Date().toISOString();
    if (rating > 5 || rating < 0 || rating === '') {
      setError('rating should be 0 to 5');
      return;
    }
    if (rating.length <= 1) {
      setError('rating should be a decimal number, like- 1.0');
      return;
    }
    const updateReview = {
      name,
      img,
      rating,
      review,
      email,
      date,
      category,
    };

    fetch(`https://about-you-photography-server.vercel.app/add_review`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updateReview),
    })
      .then(res => res.json())
      .then(result => {
        if (result.insertedId) {
          form.reset();
          navigate(stepBack);
          toast.success('Review Added Successfully', {
            style: {
              border: '4px solid #445c44',
              padding: '16px',
              BackgroundColor: '#dbd7ce',
              fontSize: '20px',
              fontWeight: '600',
            },
          });
        } else {
        }
      })
      .catch(error => {
        toast.error(error.message, {
          style: {
            border: '4px solid #e03131',
            padding: '16px',
            BackgroundColor: '#dbd7ce',
            fontSize: '20px',
            fontWeight: '600',
          },
        });
      });
  };
  return (
    <section
      style={{ fontFamily: "'Nunito', sans-serif" }}
      className="text-[#353733] mt-12 py-12 px-2 lg:px-8 w-11/12 lg:w-8/12 mx-auto bg-[#dbd7ce]"
    >
      <h1 className="text-center font-bold text-3xl ">Add Your Review</h1>
      <form onSubmit={handleAddReview}>
        <div className="mt-8 lg:mb-0">
          <label
            className="text-lg lg:text-2xl ml-4 lg:ml-8 font-semibold block select-none mb-1 lg:mb-2"
            htmlFor="name"
          >
            Your name
          </label>
          <input
            className="block w-full px-4 lg:px-8 py-2 mb-2 text-md lg:text-xl font-semibold outline-none border-2 border-[#939894]"
            type="text"
            name="name"
            id="name"
            required
            placeholder="Write your name"
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
            placeholder="Paste your photo url"
            type="text"
            name="imgUrl"
            required
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
              defaultValue={user?.email}
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
              type="telephone"
              name="userRating"
              id="userRating"
              required
              placeholder="Give your rating"
            />
          </div>
        </div>
        <div>
          <label
            className="text-lg lg:text-2xl ml-4 lg:ml-8 font-semibold block select-none mb-1 lg:mb-2"
            htmlFor="review"
          >
            Your Review
          </label>
          <textarea
            className="block w-full px-4 lg:px-8 py-2 mb-2 text-md lg:text-xl font-semibold outline-none border-2 border-[#939894]"
            name="review"
            id="review"
            cols="20"
            rows="5"
            required
            placeholder="Write your review"
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
              className="flex justify-center cursor-pointer items-center text-center text-xl font-bold hover:text-white   px-8 duration-200 py-2 mt-4 bg-[#445c44] text-[#e8e7e2]"
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddReview;
