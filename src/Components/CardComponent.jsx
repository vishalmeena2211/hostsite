// CardComponent.js
import React from 'react';

const CardComponent = () => {
  return (
    <>
      <img src='https://mymind.com/wp-content/uploads/2023/11/The-Mirror.png' alt='heading' className="w-full h-[340px] rounded-md object-cover" />
    <div className="max-w-md mx-auto bg-white  overflow-hidden rounded-md">
      {/* Image at the top */}

      {/* Heading and Content below the image */}
      <div className="p-2">
        <h2 className="text-xl font-bold mb-2">heading</h2>
        <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eligendi nulla ducimus voluptas.</p>
      </div>
    </div>
    </>
  );
};

export default CardComponent;
