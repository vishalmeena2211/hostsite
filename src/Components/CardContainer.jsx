// CardContainer.js
import React from 'react';

const CardContainer = () => {
  return (
    <div className="flex flex-wrap">
    {/* Upper Row */}
    <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">
      <div className="bg-gray-200 p-6 rounded-md shadow-md">
        <img
          src="https://mymind.com/wp-content/uploads/2023/06/features-frictionless-notetaking-1.webp"
          alt="Card 1"
          className="w-full h-full object-cover mb-4 rounded-md"
        />
        {/* Content for the upper-left card */}
        <h2 className="text-xl font-bold mb-2">Card 1</h2>
        <p>Content for Card 1 goes here.</p>
      </div>
    </div>

    <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">
      <div className="bg-gray-200 p-6 rounded-md shadow-md">
        <img
          src="https://mymind.com/wp-content/uploads/2023/06/features-smart-bookmarking.webp"
          alt="Card 2"
          className="w-full h-full object-cover mb-4 rounded-md"
        />
        {/* Content for the upper-right card */}
        <h2 className="text-xl font-bold mb-2">Card 2</h2>
        <p>Content for Card 2 goes here.</p>
      </div>
    </div>

    {/* Lower Row */}
    <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">
      <div className="bg-gray-200 p-6 rounded-md shadow-md">
        <img
          src="https://mymind.com/wp-content/uploads/2023/06/features-read-without-distractions.webp"
          alt="Card 3"
          className="w-full h-full object-cover mb-4 rounded-md"
        />
        {/* Content for the lower-left card */}
        <h2 className="text-xl font-bold mb-2">Card 3</h2>
        <p>Content for Card 3 goes here.</p>
      </div>
    </div>

    <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">
      <div className="bg-gray-200 p-6 rounded-md shadow-md">
        <img
          src="https://mymind.com/wp-content/uploads/2023/06/features-instant-collections.webp"
          alt="Card 4"
          className="w-full h-full object-cover mb-4 rounded-md"
        />
        {/* Content for the lower-right card */}
        <h2 className="text-xl font-bold mb-2">Card 4</h2>
        <p>Content for Card 4 goes here.</p>
      </div>
    </div>
  </div>
  );
};

export default CardContainer;
