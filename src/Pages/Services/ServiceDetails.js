import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ImgsViewer from 'react-images-viewer';

const ServiceDetails = () => {
  const serviceInfo = useLoaderData();
  const {
    img1,
    img2,
    img3,
    img4,
    img5,
    serviceDetails,
    serviceName,
    servicePackage1,
    servicePackage2,
    serviceRating,
  } = serviceInfo;
  return (
    <section className="w-10/12 mx-auto mt-24 mb-12">
      <div className=" h-full   grid grid-cols-2 pt-12 relative">
        <ImgsViewer
          imgs={[
            { src: img1 },
            { src: img2 },
            { src: img3 },
            { src: img4 },
            { src: img5 },
          ]}
          currImg={this.state.currImg}
          isOpen={this.state.viewerIsOpen}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          onClose={this.closeViewer}
        />
        <img
          className="absolute cursor-pointer  scale-100 duration-200 z-10 hover:z-50 hover:scale-125 w-[50%] hover:border-4 hover:border-[#dbd7ce] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          src={img1}
          alt=""
        />
        <img
          className=" blur-[1px] hover:blur-0 cursor-pointer hover:z-50 duration-200 hover:border-4 hover:border-[#dbd7ce] scale-100 hover:scale-110"
          src={img2}
          alt=""
        />
        <img
          className=" blur-[1px] hover:blur-0  cursor-pointer hover:z-50 duration-200 hover:border-4 hover:border-[#dbd7ce] scale-100 hover:scale-125"
          src={img3}
          alt=""
        />
        <img
          className=" blur-[1px] hover:blur-0  cursor-pointer hover:z-50 duration-200 hover:border-4 hover:border-[#dbd7ce] scale-100 hover:scale-125"
          src={img4}
          alt=""
        />
        <img
          className="  blur-[1px] hover:blur-0 cursor-pointer hover:z-50 duration-200 hover:border-4 hover:border-[#dbd7ce] scale-100 hover:scale-125"
          src={img5}
          alt=""
        />
      </div>
    </section>
  );
};

export default ServiceDetails;
