import React, { useRef, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Images from '../../Assets/images/banner/banner';
const Banner = () => {
  const navigate = useNavigate();
  const placesData = useLoaderData();
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    // setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  // console.log(Images);
  return (
    <section className="h-screen">
      <div className=" flex mt-8">
        <motion.div
          drag="x"
          whileTap={'grabbing'}
          ref={carousel}
          dragConstraints={{ right: 0, left: -width }}
          className=" flex items-center"
        >
          {Images.map((img, index) => {
            return (
              <motion.div key={index} className="mx-2 cursor-pointer  ">
                <img
                  className={`cursor-grab w-[1600px] h-[600px] duration-300 pointer-events-none 
                      rounded-xl  p-1`}
                  src={img}
                  alt=""
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
