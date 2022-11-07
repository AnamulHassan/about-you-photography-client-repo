import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Images from '../../Assets/images/banner/banner';
const Banner = () => {
  const [count, setCount] = useState(1);
  return (
    <section className="">
      <div>
        <button
          className="text-white text-4xl cursor-pointer mr-12"
          onClick={() => setCount(count + 1)}
        >
          next
        </button>
        <button
          className="text-white text-4xl cursor-pointer"
          onClick={() => setCount(count - 1)}
        >
          prev
        </button>
      </div>
      <div>
        <h3 className="text-white text-3xl">{count}</h3>
      </div>
    </section>
  );
};

export default Banner;
