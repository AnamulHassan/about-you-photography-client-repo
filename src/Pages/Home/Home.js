import React from 'react';
import Banner from './Banner';
import Features from './Features';
import Hero from './Hero';
import RecentWork from './RecentWork';
import Service from './Service';

const Home = () => {
  return (
    <section>
      <Hero></Hero>
      <Banner></Banner>
      <Service></Service>
      <RecentWork></RecentWork>
      <Features></Features>
    </section>
  );
};

export default Home;
