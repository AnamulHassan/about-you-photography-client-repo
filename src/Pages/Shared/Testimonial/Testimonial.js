import React from 'react';
import { useContext } from 'react';
import { FaPencilAlt, FaStar, FaTrashAlt } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/UserContext';
import Swal from 'sweetalert2';

const Testimonial = ({ reviewData, reviews, setReviews }) => {
  const { user, setStepBack } = useContext(AuthContext);
  const location = useLocation();
  const { _id, img, email, name, rating, review } = reviewData;
  const handleReviewDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this review',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#445c44',
      cancelButtonColor: '#906253',
      confirmButtonText: 'Delete',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/review_data/${_id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(result => {
            console.log(result);
            if (result.deletedCount > 0) {
              const remainingReview = reviews.filter(
                review => review._id !== _id
              );
              setReviews(remainingReview);
              Swal.fire('Deleted!', 'Your review has been deleted.', 'success');
            }
          });
      }
    });
  };
  return (
    <section className="bg-[#e8e7e2] mb-6 relative border-b-4 border-[#445c44]">
      <div className="flex items-center">
        <div className="w-1/4">
          <img className="h-full w-full" src={img} alt="" />
        </div>
        <div className="w-3/4 py-8  px-6">
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
        <div>
          <Link
            onClick={() => setStepBack(location.pathname)}
            to={`/review_rewrite/${_id}`}
            className="absolute right-0 bottom-0 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          >
            {' '}
            <span className="w-12 h-12 rounded-full duration-200 text-[#445c44] hover:text-[#e8e7e2] hover:bg-[#928979] bg-[#dbd7ce] flex items-center justify-center">
              {' '}
              <FaPencilAlt className="text-2xl" />
            </span>
          </Link>
          {location.pathname === '/my_review' && (
            <button
              onClick={() => handleReviewDelete(_id)}
              to={`/review_rewrite/${_id}`}
              className="absolute right-16 bottom-0 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            >
              {' '}
              <span className="w-12 h-12 rounded-full duration-200 text-[#906253] hover:text-[#e8e7e2] hover:bg-[#928979] bg-[#dbd7ce] flex items-center justify-center">
                {' '}
                <FaTrashAlt className="text-2xl" />
              </span>
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default Testimonial;
