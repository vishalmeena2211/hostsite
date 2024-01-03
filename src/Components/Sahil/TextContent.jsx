import React from "react";

const TextContent = () => {
  return (
    <div className="text-left p-4 sm:pl-10 md:pl-20 md:p-10 lg:pl-20 bg-yellow-500">
      <h1 className="text-5xl xs:text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-10xl font-serif font-normal leading-loose lg:mb-8 md:mb-8">
        Stay Curious
      </h1>
      <h3 className="sm:pt-10 text-base xs:text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl text-gray-600 mb-4 font-normal font-mono">
        The DJ Night Club is a haven for music enthusiasts and partygoers alike.
        The state-of-the-art sound system reverberates through the sleek
        interior, creating an immersive sonic landscape. Club is a haven for
        music enthusiasts and partygoers alike. The state-of-the-art sound
        system reverberates through th
      </h3>
      <button className="mt-10 bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black text-white px-10 py-2 rounded-full font-bold transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-black hover:to-gray-800">
        Explore More
      </button>
    </div>
  );
};

export default TextContent;