import { Tooltip } from '@material-tailwind/react';
import React, { useState } from 'react';
import { useContext } from 'react';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../Assets/image/logo.png';
import { AuthContext } from '../../../Contexts/UserContext';

const Header = () => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleOpenNav = () => {
    setOpen(!open);
  };

  return (
    <header
      style={{
        background: 'linear-gradient(90deg, #295270 0%,  #524175 100%)',
      }}
      className="w-full py-2 "
    >
      <div className="w-11/12 lg:w-10/12 mx-auto text-[#e8e7e2]">
        <div className="w-full flex relative justify-between items-center mx-auto px-1 lg:px-0">
          {/* main */}
          <div className="w-6/12 lg:w-2/12  ">
            <Link className="" to="/">
              <img className="w-[200px] h-full lg:w-1/2" src={logo} alt="" />
            </Link>
          </div>
          <div
            className={` ${
              open
                ? 'top-[500%] py-8 w-11/12 mx-auto space-y-6 lg:space-y-0 '
                : 'top-[-400%] blur-3xl lg:blur-0'
            } flex flex-col lg:flex-row bg-[#e8e7e2] lg:justify-center lg:items-center left-2/4 lg:left-0  lg:bg-transparent lg:top-0 translate-x-[-50%] lg:translate-x-0 translate-y-[-50%] lg:translate-y-0 absolute lg:static z-50 items-center text-xl lg:text-lg w-8/12 font-semibold duration-500 text-[#353733] lg:text-[#e8e7e2]`}
          >
            {user?.uid && (
              <NavLink
                to="/my_review"
                className={({ isActive }) =>
                  isActive
                    ? `px-6  duration-300 py-1 bg-[#e8e7e2] text-[#445c44] mx-0 lg:mx-4`
                    : 'mx-0 lg:mx-4 px-6 py-1'
                }
              >
                My Review
              </NavLink>
            )}
            {user?.uid && (
              <NavLink
                to="/add_service"
                className={({ isActive }) =>
                  isActive
                    ? 'duration-300 mx-0 lg:mx-4 bg-[#e8e7e2] text-[#445c44] px-6 py-1'
                    : 'mx-0 lg:mx-4 px-6 py-1'
                }
              >
                Add Service
              </NavLink>
            )}
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? ' mx-0  duration-300 lg:mx-4  bg-[#e8e7e2] text-[#445c44] px-6 py-1'
                  : 'mx-0 lg:mx-4 px-6 py-1'
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'duration-300 bg-[#e8e7e2] text-[#445c44] px-6 py-1 '
                  : 'px-6 py-1'
              }
            >
              About
            </NavLink>
          </div>
          <div className="flex justify-end items-center relative">
            <div className="block">
              <div className="flex items-center">
                <div className="px-1">
                  <div className="">
                    {user?.photoURL ? (
                      <Tooltip content={user?.displayName}>
                        <Link to="/profile">
                          <img
                            variant="gradient"
                            className=" rounded-full h-9 md:h-10 xl:h-11 w-9 md:w-10 xl:w-11"
                            src={user?.photoURL}
                            alt=""
                            onError={e =>
                              (e.currentTarget.src =
                                'https://cdn-icons-png.flaticon.com/512/219/219983.png')
                            }
                          />
                        </Link>
                      </Tooltip>
                    ) : user?.uid ? (
                      <Link to="/profile">
                        <FaUserCircle className="h-9 md:h-12 w-9 md:w-12 hover:text-[#0071b3] text-[#575c5f] border-2 border-[#bcbebf] rounded-full" />
                      </Link>
                    ) : (
                      <Link
                        to="/signin"
                        className=" px-10  text-center text-md font-bold hover:bg-[#fff] rounded-full cursor-pointer duration-200 py-2 mt-4 text-[#445c44] bg-[#e8e7e2]"
                      >
                        Login
                      </Link>
                    )}
                  </div>
                </div>
                <button
                  onClick={handleOpenNav}
                  type="button"
                  className="block lg:hidden"
                >
                  <div className="l">
                    <FaBars className="h-10 w-10 p-2 duration-200  hover:text-[#0071b3] text-[#575c5f]" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          {/* main */}
        </div>
      </div>
    </header>
  );
};

export default Header;
