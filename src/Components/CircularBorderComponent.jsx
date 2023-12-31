// CircularBorderComponent.js
import React from 'react';

const CircularBorderComponent = () => {
  return (
    <div className="relative bg-blue-500  overflow-hidden border-2 border-red-800 h-screen">
      {/* Circular Border */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 border-t-2 border-white border-solid h-[200%] w-[90%] bg-blue-500 rounded-full"></div>

      {/* Menu Icon */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 ">
       <img src="https://mymind.com/wp-content/uploads/2023/05/statement_mymind_guy.svg" alt="" />
      </div>

      {/* Content */}
      <div className="mt-12 p-4 text-white">
        {/* Your content goes here */}
        <h2 className="text-2xl font-bold">Component Title</h2>
        <p>Some content below the circular border...</p>
      </div>
    </div>
  );
};

export default CircularBorderComponent;
