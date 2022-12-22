import React from 'react';
import { RotatingSquare } from 'react-loader-spinner';

const LoaderPrimary = () => {
  return (
    <div>
      <RotatingSquare
        height="100"
        width="100"
        color="#295270"
        ariaLabel="rotating-square-loading"
        strokeWidth="4"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default LoaderPrimary;
