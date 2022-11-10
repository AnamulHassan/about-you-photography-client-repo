import React, { useContext, useState } from 'react';
import { FaShieldAlt, FaUserCircle } from 'react-icons/fa';
import { Form, Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/UserContext';
const Profile = () => {
  const navigate = useNavigate();
  const { user, updateUserProfile, removeUser, logOutUser } =
    useContext(AuthContext);
  const [error, setError] = useState('');

  const handleChangeInfo = event => {
    event.preventDefault();
    const form = event.target;
    const fullName = form.firstName.value + ' ' + form.lastName.value;
    const photoUrl = form.photoUrl.value;
    updateUserProfile(fullName, photoUrl)
      .then(() => {
        toast.success('Your information is updated', {
          duration: 4000,
          style: {
            border: '2px solid #51cf66',
            padding: '16px',
            color: '#000',
            textAlign: 'center',
            fontSize: '20px',
            backgroundColor: '#f4f7fc',
          },
        });
      })
      .catch(error => setError(error.message));
  };
  const handleDeleteUser = () => {
    removeUser()
      .then(() => {
        localStorage.removeItem('ayp-token');
        toast.error('Your account is permanently deleted', {
          duration: 4000,
          style: {
            border: '2px solid #e03131',
            padding: '16px',
            color: '#000',
            textAlign: 'center',
            fontSize: '20px',
            backgroundColor: '#f4f7fc',
          },
        });
        navigate('/');
      })
      .catch(error => setError(error.message));
  };
  const handleLogoutUser = () => {
    logOutUser()
      .then(() => {
        localStorage.removeItem('ayp-token');
        navigate('/');
      })
      .catch(error => setError(error.message));
  };
  return (
    <section className="py-12 my-[-1px]">
      <section className="w-[90%] lg:w-4/5 mx-auto border-2 ">
        <div className="bg-[#dbd7ce] flex flex-col lg:flex-row">
          <div className="bg-[#ffffff] w-full  lg:w-[30%]  flex flex-col ">
            <div className="flex justify-center my-4">
              {user?.photoURL ? (
                <img
                  className="rounded-full max-h-[200px] "
                  src={user?.photoURL}
                  alt=""
                  onError={e =>
                    (e.currentTarget.src =
                      'https://cdn-icons-png.flaticon.com/512/219/219983.png')
                  }
                />
              ) : (
                <FaUserCircle className="text-[200px]" />
              )}
            </div>
            <h2 className="text-3xl font-semibold text-center">
              {user?.displayName === ' ' ? 'Unknown User' : user?.displayName}
            </h2>
            <div className="flex mt-8 mb-10 lg:mb-0 flex-col items-center px-4 space-y-2">
              <Link
                to="/my_review"
                className="w-full font-bold text-[#868e96] duration-200
          hover:text-[#1b4460] text-center   text-xl py-4 bg-[#dbd7ce]"
              >
                Your Review
              </Link>
              <Link
                to="/add_service"
                className="w-full font-bold text-[#868e96] duration-200
          hover:text-[#1b4460] text-center  text-xl py-4 bg-[#dbd7ce]"
              >
                Add Service
              </Link>

              <button
                onClick={handleLogoutUser}
                className="w-full font-bold text-[#868e96] duration-200
          hover:text-[#1b4460] text-center   text-xl py-4 bg-[#dbd7ce]"
              >
                Logout
              </button>
              <h2 className="text-lg pt-8 font-semibold text-center leading-5 ">
                Are you sure to delete your account?
              </h2>
              <button
                onClick={handleDeleteUser}
                className="bg-[#5e422d] mb-4 lg:mb-0 font-semibold text-lg py-1 mt-4 w-[60%]  select-none cursor-pointer text-[#f4f7fc] duration-300 hover:bg-[#906253]"
              >
                Delete Account
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[70%] px-4 lg:px-8  py-6 lg:py-10">
            <div className="flex flex-col lg:flex-row ">
              <div className="w-full lg:w-[20%] mb-5 lg:mb-0  flex flex-col lg:flex-row items-center justify-center">
                <span className="bg-[#e8e7e2] rounded-full p-5 border-2 ">
                  <FaShieldAlt className="h-20 w-20 text-[#445c44] text-opacity-50" />
                </span>
              </div>
              <div className="w-full lg:w-[80%] text-[#575c5f]">
                <h2 className="text-2xl lg:text-4xl font-semibold mb-2">
                  Personal Information
                </h2>
                <p className="text-sm lg:text-md font-semibold ">
                  When you use our services, you&#39;re trusting us with your
                  information. We understand this is a big responsibility and
                  work hard to protect your information and put you in control.
                </p>
              </div>
            </div>
            <Form
              onSubmit={handleChangeInfo}
              className="mt-8 w-full lg:w-[80%] mx-auto"
            >
              <div className="w-full flex justify-between space-x-2 lg:space-x-5">
                <div className="space-y-1 w-full">
                  <label
                    htmlFor="first-name"
                    className="block ml-5 mb-[-4px] text-md lg:text-lg font-semibold"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="first-name"
                    required
                    placeholder={
                      user?.displayName
                        ? user.displayName.split(' ')[0]
                        : 'First Name'
                    }
                    className=" w-full px-3 py-1 border-2 text-md font-semibold  border-[#939894]  bg-[#ffffff]  outline-none"
                  />
                </div>
                <div className="space-y-1 w-full">
                  <label
                    htmlFor="last-name"
                    className="block ml-5 mb-[-4px] text-md lg:text-lg font-semibold"
                  >
                    Last name
                  </label>
                  <div className="flex flex-col items-end">
                    {' '}
                    <input
                      type="text"
                      name="lastName"
                      id="last-name"
                      required
                      placeholder={
                        user?.displayName
                          ? user.displayName.split(' ')[1]
                          : 'Last Name'
                      }
                      className=" w-full px-3 py-1 border-2 text-md font-semibold  border-[#939894]  bg-[#ffffff]  outline-none"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label
                  className="block ml-5 mb-[-4px] text-md lg:text-lg font-semibold"
                  htmlFor="email"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  readOnly
                  defaultValue={user?.email}
                  required
                  className=" w-full px-3 py-1 border-2 text-md font-semibold  border-[#939894]  bg-[#ffffff]  outline-none"
                  placeholder={user?.email ? user.email : 'example@mail.com'}
                />
              </div>
              <div>
                <label
                  className="block ml-5 mb-[-4px] text-md lg:text-lg font-semibold"
                  htmlFor="photoUrl"
                >
                  Your Photo URL
                </label>
                <input
                  type="text"
                  id="photoUrl"
                  name="photoUrl"
                  required
                  className=" w-full px-3 py-1 border-2 text-md font-semibold  border-[#939894]  bg-[#ffffff]  outline-none"
                  placeholder={user?.photoURL ? user?.photoURL : 'xyz.com'}
                />
              </div>
              <div>
                <label
                  className="block ml-5 mb-[-4px] text-md lg:text-lg font-semibold"
                  htmlFor="contact-number"
                >
                  Your Contact Number
                </label>
                <input
                  type="number"
                  id="contact-number"
                  name="contactNumber"
                  className=" w-full px-3 py-1 border-2 text-md font-semibold  border-[#939894]  bg-[#ffffff]  outline-none"
                  placeholder="+088000000000"
                />
              </div>
              <p
                className={`${
                  error ? 'block' : 'hidden'
                } mb-[-24px] text-center text-md font-semibold text-[#e15a51]`}
              >
                {error}
              </p>
              <input
                type="submit"
                value="Save Change"
                className=" mt-7 px-8 py-1 select-none font-semibold cursor-pointer bg-[#445c44] text-xl  text-[#f4f7fc]  duration-300 hover:bg-[#353733]"
              />
            </Form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Profile;
