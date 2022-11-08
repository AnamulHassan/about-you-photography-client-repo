import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

const Banner = () => {
  const [slidersData, setSlidersData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/slider')
      .then(res => res.json())
      .then(data => setSlidersData(data));
  }, []);
  return (
    <section className=" w-10/12 mx-auto my-12">
      <div className="w-full ">
        <CarouselProvider
          className=" relative border-4 bg-[#dbd7ce] border-[#dbd7ce]"
          naturalSlideWidth={100}
          naturalSlideHeight={60}
          totalSlides={slidersData.length}
        >
          <Slider className="">
            {slidersData.map((slider, index) => (
              <Slide key={index} index={index} className="relative">
                <img className="z-10 h-full  p-1 " src={slider?.img} alt="" />
                <div
                  style={{ fontFamily: "'Roboto Slab', sans-serif" }}
                  className="text-[#e8e7e2] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-50 w-3/4 flex justify-center flex-col items-center text-center"
                >
                  <h2 className="text-4xl font-semibold">{slider?.event}</h2>
                  <h4 className="text-2xl font-light mt-2 mb-3 ">
                    {slider?.title}
                  </h4>
                  <p className="text-base leading-7 ">{slider?.details}</p>
                </div>
              </Slide>
            ))}
          </Slider>
          <ButtonBack className="absolute bottom-0 left-[40%] -translate-x-1/2 -translate-y-1/2">
            <span className="h-8 w-8 bg-[#3d8aa4] opacity-50 hover:opacity-80 duration-200 flex items-center justify-center rounded-full">
              <FaAngleDoubleLeft className="text-xl  text-white" />
            </span>
          </ButtonBack>
          <ButtonNext className="absolute bottom-0 right-[40%] -translate-x-1/2 -translate-y-1/2 rounded-xl">
            <span className="h-8 w-8 bg-[#3d8aa4] opacity-50 flex items-center justify-center rounded-full hover:opacity-80 duration-200">
              <FaAngleDoubleRight className="text-xl text-white" />
            </span>
          </ButtonNext>
        </CarouselProvider>
      </div>
    </section>
  );
};

export default Banner;
