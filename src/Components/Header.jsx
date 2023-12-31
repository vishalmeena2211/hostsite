// HeroSection.js
import React from 'react';


const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-red-900 via-red-700 text-black h-screen">
      {/* Green background on the right */}
      <div className="absolute inset-0 right-0 w-1/2 h-full  bg-gradient-to-r from-slate-50 to-orange-300"></div>

      {/* Circular element with white background */}
      <svg
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px]"
        fill="white"
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="50" />
      </svg>

      {/* Content inside the circle */}
      <div className="absolute w-full text-blue-800 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-8xl text-black tracking-tighter mb-4">Remember everything.
Organize nothing.</h1>
        <p className="text-sm mt-22 w-5/12 tracking-tighter leading-10 text-center mx-auto">All your <span className='border border-red-500 rounded-full p-1 px-2 pb-2 mx-2 text-red-500'>notes</span><span className='border border-purple-500 rounded-full p-1 px-2 pb-2 mx-2 text-purple-500'>bookmarks</span><span className='border border-blue-500 rounded-full p-1 px-2 pb-2 mx-2 text-blue-500'>inspiration</span><span className='border border-pink-500 rounded-full p-1 px-2 pb-2 mx-2 text-pink-500'>articles</span> and<span className='border border-yellow-600 rounded-full p-1 px-2 pb-2 mx-2 text-yellow-600' >images</span> in one single,private place.</p>
      </div>
    </div>
  );
};

export default HeroSection;
