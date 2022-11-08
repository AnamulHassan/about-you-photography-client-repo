import React, { useEffect } from 'react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

const Slider = () => {
  const [slidersData, setSlidersData] = useState([]);
  const [sliderData, setSliderData] = useState([]);
  const { event, title, details } = sliderData;
  const [count, setCount] = useState(1);
  const [slideDirection, setSlideDirection] = useState(400);
  let variants = {
    enter: { x: slideDirection },
    center: { x: 0 },
    exit: { x: slideDirection },
  };
  useEffect(() => {
    fetch('http://localhost:5000/slider')
      .then(res => res.json())
      .then(data => {
        setSlidersData(data);
        setSliderData(data[0]);
        setCount(2);
      });
  }, []);
  const handleNextButton = () => {
    setCount(+count === 6 ? +count - 5 : count + 1);
    setSliderData(slidersData.find(slider => slider.imgId === +count));
    setSlideDirection(400);
    // console.log('next');
  };
  const handlePreviousButton = () => {
    setCount(+count === 1 ? +count + 5 : count - 1);
    setSliderData(slidersData.find(slider => slider.imgId === +count));
    setSlideDirection(-400);
    // console.log('Priv');
  };
  // console.log(sliderData);
  return (
    <div className="relative h-[20rem] lg:h-[50rem]  w-10/12 mx-auto b   my-12 overflow-hidden">
      <button
        onClick={handleNextButton}
        className="text-4xl  z-50 block cursor-pointer absolute bottom-[35%] md:bottom-1/2 -right-5 lg:right-[8%] -translate-x-1/2 -translate-y-1/2"
      >
        <span className="h-12 w-12 rounded-2xl bg-[#3d8aa4] hover:opacity-60 opacity-30 duration-200 flex items-center justify-center">
          <FaAngleDoubleRight className="text-3xl text-white" />
        </span>
      </button>
      <button
        className="text-4xl z-50 block cursor-pointer absolute  bottom-[35%] md:bottom-1/2 left-[10%]  md:left-[4%] lg:left-[10%] -translate-x-1/2 -translate-y-1/2"
        onClick={handlePreviousButton}
      >
        <span className="h-12 w-12 rounded-2xl bg-[#3d8aa4] hover:opacity-60 opacity-30 duration-200 flex items-center justify-center">
          <FaAngleDoubleLeft className="text-3xl text-white" />
        </span>
      </button>
      <AnimatePresence className="absolute w-full mx-auto">
        <motion.div
          key={count}
          initial="enter"
          variants={variants}
          animate="center"
          exit="exit"
          transition={{ duration: 0.4 }}
          className="absolute w-full mx-auto"
        >
          <img
            className=" w-full h-[20rem] lg:h-[40rem] rounded-md"
            src={sliderData?.img}
            alt=""
          />
        </motion.div>
      </AnimatePresence>
      <div className="hidden lg:flex absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2   flex-col items-center justify-center ">
        <div
          className=" w-3/4 lg:w-full mt-24 text-center leading-6 text-[#e8e7e2]"
          style={{ fontFamily: "'Roboto Slab', sans-serif" }}
        >
          <h3 className=" text-3xl mt-12 font-bold mb-4">{event}</h3>
          <h4 className="text-xl font-semibold mb-3">{title}</h4>
          <p className="font-md text-[#dbd7ce]">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
