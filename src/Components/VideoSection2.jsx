// VideoSection2.js
import React from 'react';

const VideoSection2 = () => {
  return (
    <div className="relative bg-red-500 mx-5 h-full flex py-5 flex-col items-center justify-between">

      {/* Content overlay */}
      <div className=" text-center w-4/5 mx-auto">
        <h3 className="text-sm">NO WASTED TIME OR ENERGY</h3>
        <h1 className="text-5xl ">Folders are dead. This is your personal search engine.</h1>
        
        <div className='flex justify-center my-5'>
        <p className="text-md w-1/2 text-white">earch by color, keyword, brand, date – whatever you think of first. Associative search & visual cues work with your brain to find it instantly.</p>
        </div>
        <h2 className="text-lg text-white font-semibold">WATCH THE VIDEO</h2>
      </div>
      {/* Autoplaying Video */}

      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover "
        src="https://carbon-media.accelerator.net/00000000001/lGf6kOyeDKjeAZdenRgWv2;original.webm"
        // Replace "your-video-source.mp4" with the actual source of your video
        ></video>
    </div>
  );
};

export default VideoSection2;
