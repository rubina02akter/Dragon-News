import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
  return (
    <div className='flex gap-4 items-center bg-base-200 p-3'>
      <p className='bg-[#D72050] py-1 px-3  text-base-300'>Latest</p>
     <Marquee pauseOnHover={true} speed={100} className='space-x-10'>
      <Link to='/news'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, quod ut. Tenetur non et porro.</Link>
      <Link to='/news'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, quod ut. Tenetur non et porro.</Link>
      <Link to='/news'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, quod ut. Tenetur non et porro.</Link>
     </Marquee>
    </div>
  );
};

export default LatestNews;