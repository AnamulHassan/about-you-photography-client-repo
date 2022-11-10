import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import RecentWorkCard from './RecentWorkCard';

const RecentWork = () => {
  const [recentWork, setRecentWork] = useState([]);

  useEffect(() => {
    fetch('https://about-you-photography-server.vercel.app/recent_work')
      .then(res => res.json())
      .then(data => setRecentWork(data));
  }, []);
  return (
    <div className="bg-[#e8e7e2] my-24">
      <h2
        style={{ fontFamily: "'Roboto Slab', sans-serif" }}
        className="text-4xl font-bold text-center text-[#928979] pt-8"
      >
        My Recent works
      </h2>
      {recentWork?.map((work, index) => (
        <RecentWorkCard key={index} workData={work}></RecentWorkCard>
      ))}
    </div>
  );
};

export default RecentWork;
