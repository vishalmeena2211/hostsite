// TabsComponent.js
import React, { useState } from 'react';

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div>
      {/* Tabs */}
      <h3 className='text-center text-orange-400 my-5 font-semibold text-sm'>USE CASES</h3>
      <h1 className='text-center my-5 text-6xl'>For visual minds of all kinds.</h1>
      <div className="flex w-10/12 mx-auto justify-center gap-7">
        {[1, 2, 3, 4, 5].map((tabNumber) => (
          <div
            key={tabNumber}
            onClick={() => handleTabClick(tabNumber)}
            className={`relative cursor-pointer px-4 text-sm transition-all duration-200 py-2 ${
              activeTab === tabNumber ? 'text-red-500 scale-110' : 'text-gray-500'
            }`}
          >
            {activeTab === tabNumber && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-red-500 h-1 w-1 rounded-full"></div>
            )}
            Marketers
          </div>
        ))}
      </div>

      {/* Content based on active tab */}
      <div className="mt-8 mx-auto w-10/12">
        {activeTab === 1 && <div className='h-[420px] rounded-md flex justify-center items-center w-full bg-red-500'>Content for Tab 1 goes here.</div>}
        {activeTab === 2 && <div className='h-[420px] rounded-md flex justify-center items-center w-full bg-red-500'>Content for Tab 2 goes here.</div>}
        {activeTab === 3 && <div className='h-[420px] rounded-md flex justify-center items-center w-full bg-red-500'>Content for Tab 3 goes here.</div>}
        {activeTab === 4 && <div className='h-[420px] rounded-md flex justify-center items-center w-full bg-red-500'>Content for Tab 4 goes here.</div>}
        {activeTab === 5 && <div className='h-[420px] rounded-md flex justify-center items-center w-full bg-red-500'>Content for Tab 5 goes here.</div>}
      </div>
    </div>
  );
};

export default TabsComponent;
