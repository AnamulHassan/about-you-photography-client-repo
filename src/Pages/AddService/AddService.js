import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddService = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleAddService = event => {
    event.preventDefault();
    const form = event.target;
    const serviceName = form.serviceName.value;
    const img1 = form.img1.value;
    const img2 = form.img2.value;
    const img3 = form.img3.value;
    const img4 = form.img4.value;
    const img5 = form.img5.value;
    const serviceDetails = form.details.value;
    const serviceRating = form.rating.value;
    const package1 = form.package1.value;
    const servicePackage1 = package1.split('|');
    const package2 = form.package2.value;
    const servicePackage2 = package2.split('|');
    const date = new Date().toISOString();
    if (serviceRating > 5 || serviceRating < 0 || serviceRating === '') {
      setError('rating should be 0 to 5');
      return;
    }
    if (serviceRating.length <= 1) {
      setError('rating should be a decimal number, like- 1.0');
      return;
    }
    const addService = {
      img1,
      img2,
      img3,
      img4,
      img5,
      serviceName,
      serviceDetails,
      serviceRating,
      servicePackage1,
      servicePackage2,
      date,
    };

    fetch(`https://about-you-photography-server.vercel.app/add_service`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(addService),
    })
      .then(res => res.json())
      .then(result => {
        if (result.insertedId) {
          form.reset();
          navigate('/services');
          toast.success('Service Added Successfully', {
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
      className="text-[#353733] mt-8 lg:mt-16 py-12 px-2 lg:px-8 w-11/12 lg:w-8/12 mx-auto bg-[#dbd7ce]"
    >
      <h1 className="text-center font-bold mb-6 lg:mb-0 text-3xl ">
        Add Service
      </h1>
      <form onSubmit={handleAddService}>
        <div className="">
          <label
            className="text-lg lg:text-2xl ml-4 lg:ml-8 font-semibold block select-none mb-1 lg:mb-2"
            htmlFor="serviceName"
          >
            Name
          </label>
          <input
            className="block w-full px-4 lg:px-8 py-2 mb-2 text-md lg:text-xl font-semibold outline-none border-2 border-[#939894]"
            type="text"
            name="serviceName"
            id="serviceName"
            required
            placeholder="Write your service name with Pascal case (Example Service) "
          />
        </div>
        <div>
          <label
            className="text-lg lg:text-2xl ml-4 lg:ml-8 font-semibold block select-none mb-1 lg:mb-2"
            htmlFor="img1"
          >
            Photo Url 1
          </label>
          <input
            className="block w-full px-4 lg:px-8 py-2 mb-2 text-md lg:text-xl font-semibold outline-none border-2 border-[#939894]"
            placeholder="Paste your photo url 1"
            type="text"
            name="img1"
            required
            id="img1"
          />
        </div>
        <div>
          <label
            className="text-lg lg:text-2xl ml-4 lg:ml-8 font-semibold block select-none mb-1 lg:mb-2"
            htmlFor="img2"
          >
            Photo Url 2
          </label>
          <input
            className="block w-full px-4 lg:px-8 py-2 mb-2 text-md lg:text-xl font-semibold outline-none border-2 border-[#939894]"
            placeholder="Paste your photo url 2"
            type="text"
            name="img2"
            required
            id="img2"
          />
        </div>
        <div>
          <label
            className="text-lg lg:text-2xl ml-4 lg:ml-8 font-semibold block select-none mb-1 lg:mb-2"
            htmlFor="img3"
          >
            Photo Url 3
          </label>
          <input
            className="block w-full px-4 lg:px-8 py-2 mb-2 text-md lg:text-xl font-semibold outline-none border-2 border-[#939894]"
            placeholder="Paste your photo url 3"
            type="text"
            name="img3"
            required
            id="img3"
          />
        </div>
        <div>
          <label
            className="text-lg lg:text-2xl ml-4 lg:ml-8 font-semibold block select-none mb-1 lg:mb-2"
            htmlFor="img4"
          >
            Photo Url 4
          </label>
          <input
            className="block w-full px-4 lg:px-8 py-2 mb-2 text-md lg:text-xl font-semibold outline-none border-2 border-[#939894]"
            placeholder="Paste your photo url 4"
            type="text"
            name="img4"
            required
            id="img4"
          />
        </div>
        <div>
          <label
            className="text-lg lg:text-2xl ml-4 lg:ml-8 font-semibold block select-none mb-1 lg:mb-2"
            htmlFor="img5"
          >
            Photo Url 5
          </label>
          <input
            className="block w-full px-4 lg:px-8 py-2 mb-2 text-md lg:text-xl font-semibold outline-none border-2 border-[#939894]"
            placeholder="Paste your photo url 5"
            type="text"
            name="img5"
            required
            id="img5"
          />
        </div>
        <div>
          <label
            className="text-lg lg:text-2xl ml-4 lg:ml-8 font-semibold block select-none mb-1 lg:mb-2"
            htmlFor="details"
          >
            Description
          </label>
          <textarea
            className="block w-full px-4 lg:px-8 py-2 mb-2 text-md lg:text-xl font-semibold outline-none border-2 border-[#939894]"
            name="details"
            id="details"
            cols="20"
            rows="5"
            required
            placeholder="Write about your service in details"
          ></textarea>
        </div>
        <div>
          <label
            className="text-lg lg:text-2xl ml-4 lg:ml-8 font-semibold block select-none mb-1 lg:mb-2"
            htmlFor="package1"
          >
            Service Package 1
          </label>
          <textarea
            className="block w-full px-4 lg:px-8 py-2 mb-2 text-md lg:text-xl font-semibold outline-none border-2 border-[#939894]"
            name="package1"
            id="package1"
            cols="20"
            rows="5"
            required
            placeholder="Time | Duration | Production | Provide | Product | Contact | Security | Offer | T & C | Price"
          ></textarea>
        </div>
        <div>
          <label
            className="text-lg lg:text-2xl ml-4 lg:ml-8 font-semibold block select-none mb-1 lg:mb-2"
            htmlFor="package2"
          >
            Service Package 2
          </label>
          <textarea
            className="block w-full px-4 lg:px-8 py-2 mb-2 text-md lg:text-xl font-semibold outline-none border-2 border-[#939894]"
            name="package2"
            id="package2"
            cols="20"
            rows="5"
            required
            placeholder="Time | Duration | Production | Provide | Product | Contact | Security | Offer | T & C | Price"
          ></textarea>
        </div>
        <div>
          <label
            className="text-lg lg:text-2xl ml-4 lg:ml-8 font-semibold block select-none mb-1 lg:mb-2"
            htmlFor="rating"
          >
            Rating
          </label>
          <input
            className="block w-full px-4 lg:px-8 py-2 mb-2 text-md lg:text-xl font-semibold outline-none border-2 border-[#939894]"
            placeholder="Service Rating"
            type="text"
            name="rating"
            required
            id="rating"
          />
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
            <input
              type="submit"
              value="Continue "
              className="flex justify-center cursor-pointer items-center text-center text-md lg:text-xl font-bold hover:text-white   px-8 duration-200 py-2 mt-4 bg-[#445c44] text-[#e8e7e2]"
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddService;
