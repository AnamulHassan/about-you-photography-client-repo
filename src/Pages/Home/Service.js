import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';

const Service = () => {
  const [services, setService] = useState([]);
  const serviceLimit = 3;
  useEffect(() => {
    fetch(
      `https://about-you-photography-server.vercel.app/services?limit=${serviceLimit}`
    )
      .then(res => res.json())
      .then(data => setService(data));
  }, []);
  return (
    <section className="w-full lg:w-10/12 mx-auto  bg-[#e8e7e2] py-4 lg:py-8 p-4 lg:p-10">
      <div className=" flex justify-center items-center flex-col">
        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-center text-[#445c44] my-4">
          Services
        </h2>
        <p className="w-11/12 lg:w-3/5 text-sm  lg:text-md text-center  font-semibold text-[#939894]">
          Our creative agency has years of experience in custom photography for
          marketing, including technology product shots, executive portraits,
          in-house food styling and photo shoots
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 space-y-5 lg:space-y-0 lg:grid-cols-3 gap-x-6">
        {services.map((service, index) => (
          <ServiceCard key={index} serviceData={service}></ServiceCard>
        ))}
      </div>
      <div className="w-full flex justify-center my-8">
        <Link
          to="/services"
          className="text-[#445c44] text-xl font-bold border-b-2 border-[#445c44] hover:border-[#e8e7e2] duration-200 leading-4 tracking-tight"
        >
          See More Services
        </Link>
      </div>
    </section>
  );
};

export default Service;
