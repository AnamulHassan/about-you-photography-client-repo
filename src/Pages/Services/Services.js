import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';

const Services = () => {
  const servicesData = useLoaderData();
  // console.log(servicesData);
  return (
    <section className="bg-[#e8e7e2] py-6 lg:py-12 -mb-12">
      <div className="w-11/12 lg:w-10/12 mx-auto py-2 lg:py-4 p-2 md:p-8 lg:p-10 font-serif text-center">
        <div>
          <h2 className="pt-4 lg:pt-6 select-none font-bold tracking-tight text-[#445c44] text-4xl lg:text-6xl">
            Service Prices and Packages
          </h2>
          <p className="text-md select-none mt-2 mb-12 font-semibold text-[#aa9383]">
            - Me as a Photographer who loves capturing photo -
            <br />- I am so happy you are here, thank you -
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} serviceData={service}></ServiceCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
