import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import { Tooltip } from '@material-tailwind/react';
import logo from '../../../Assets/image/logo.png';

const Footer = () => {
  const location = useLocation();
  return (
    <footer
      style={{
        background: 'linear-gradient(90deg, #295270 0%,  #524175 100%)',
      }}
      className="mt-12"
    >
      <svg
        viewBox="0 0 1439 147"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
            <g
              className="wave"
              fill={`${
                location.pathname === '/services'
                  ? '#e8e7e2'
                  : location.pathname.slice(0, 10) === '/services/'
                  ? '#dbd7ce'
                  : '#fff'
              }`}
            >
              <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
            </g>
            <g transform="translate(1.000000, 15.000000)" fill="#e8e7e2">
              <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  opacity="0.200000003"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <div className="container mx-auto text-center py-12 -mb-6">
        <div className="text-[#e8e7e2] body-font">
          <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
              <Link className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <span className=" text-[#e8e7e2] text-2xl tracking-tighter">
                  <img className="w-4/5" src={logo} alt="" />
                </span>
              </Link>
              <p className="uppercase text-sm font-semibold text-[#bbbcbb]">
                Make your moment memorable
              </p>
            </div>
            <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
              <div className="lg:w-4/12 md:w-1/2 w-full px-4">
                <h2 className="title-font text-lg font-bold text-[#e8e7e2] tracking-widest mb-2">
                  Insights & Strategy
                </h2>
                <nav className="list-none text-md lg:text-sm space-y-2 mb-10 text-[#bbbcbb] font-semibold">
                  <li>
                    <Link className=" hover:text-gray-300 cursor-pointer">
                      Marketing Audit
                    </Link>
                  </li>
                  <li>
                    <Link className=" hover:text-gray-300 cursor-pointer">
                      Analytics & Reporting
                    </Link>
                  </li>
                  <li>
                    <Link className=" hover:text-gray-300 cursor-pointer">
                      Brand Positioning
                    </Link>
                  </li>
                  <li>
                    <Link className=" hover:text-gray-300 cursor-pointer">
                      Content Marketing
                    </Link>
                  </li>
                </nav>
              </div>
              <div className="lg:w-4/12 md:w-1/2 w-full px-4">
                <h2 className="title-font text-lg font-bold text-[#e8e7e2] tracking-widest mb-2">
                  Design & Storytelling
                </h2>
                <nav className="list-none text-md lg:text-sm space-y-2 mb-10 text-[#bbbcbb] font-semibold">
                  <li>
                    <Link className="hover:text-gray-300 cursor-pointer">
                      UX & UI Web Design
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-gray-300 cursor-pointer">
                      Branding & Logo Design
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-gray-300 cursor-pointer">
                      Graphic Design
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-gray-300 cursor-pointer">
                      Photography
                    </Link>
                  </li>
                </nav>
              </div>
              <div className="lg:w-4/12 md:w-1/2 w-full px-4">
                <h2 className="title-font text-lg font-bold text-[#e8e7e2] tracking-widest mb-2">
                  Technology & Development
                </h2>
                <nav className="list-none text-md lg:text-sm space-y-2 mb-10 text-[#bbbcbb] font-semibold">
                  <li>
                    <Link className="hover:text-gray-300 cursor-pointer">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-gray-300 cursor-pointer">
                      Email Marketing
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-gray-300 cursor-pointer">
                      MarTech Integrations
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-gray-300 cursor-pointer">
                      App Development & Design
                    </Link>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-[#e8e7e2] text-md text-center sm:text-left">
              &copy; {new Date().getFullYear()} About You Photography || All
              Right Reserved
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <Tooltip
                content="Facebook"
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <a
                  href="https://www.facebook.com/"
                  className="text-gray-500 cursor-pointer"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="  rounded-full h-9 w-9 bg-[#4b69b0] flex items-center justify-center">
                    <FaFacebookF className="text-2xl text-white" />
                  </span>
                </a>
              </Tooltip>
              <Tooltip
                content="Twitter"
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <a
                  href="https://twitter.com/"
                  className="ml-3 text-gray-500 cursor-pointer"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="  rounded-full h-9 w-9 bg-[#37b1e1] flex items-center justify-center">
                    <FaTwitter className="text-2xl text-white" />
                  </span>
                </a>
              </Tooltip>
              <Tooltip
                content="Instagram"
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-3 text-gray-500 cursor-pointer"
                >
                  <span
                    style={{
                      background:
                        'linear-gradient(90deg, #f48c4d 25%, #de2c4a 50%, #a24191 75%,  #5f54a0 100%)',
                    }}
                    className="  rounded-full h-9 w-9 flex items-center justify-center"
                  >
                    <FaInstagram className="text-2xl text-white" />
                  </span>
                </a>
              </Tooltip>

              <Tooltip
                content="Linkedin"
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  className="ml-3 text-gray-500 cursor-pointer"
                  rel="noreferrer"
                >
                  <span className="  rounded-full h-9 w-9 bg-[#0678b6] flex items-center justify-center">
                    <FaLinkedinIn className="text-2xl text-white" />
                  </span>
                </a>
              </Tooltip>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
