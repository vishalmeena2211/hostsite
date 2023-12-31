// // AccordionComponent.js
// import React, { useState } from 'react';





// const CardWithImage = ({ heading, content, imageUrl }) => {
//     return (
//       <div className="bg-white rounded-lg overflow-hidden shadow-md flex justify-between">
//         {/* Left side (heading and content) */}
//         <div className="p-1 w-1/3 flex flex-col">
//           <h3 className="text-sm font-bold mb-2">Save highlights with a click

// Highlight a passage or quote you want to remember from an article or newsletter. mymind will file it away for you, so you can keep reading.


// Trusted by thinkers
// & doers everywhere.


// button-iconNOT CONVINCED? WE HAVE MORE
// </h3>
//           <p className="text-gray-700">content</p>
//         </div>
  
//         {/* Right side (image) */}
//         <div className="w-[40%] h-[40%]">
//           <img className="w-full h-full object-cover" src="https://mymind.com/wp-content/uploads/2023/06/features-frictionless-notetaking-1.webp" alt="Card" />
//         </div>
//       </div>
//     );
//   };



// const TabNavs = () => {
//   const [activeTab, setActiveTab] = useState(1); // Default active tab

//   const handleTabClick = (tabNumber) => {
//     setActiveTab(tabNumber);
//   };

//   return (
//     <div className="container mx-auto mt-8">
//       <div className="flex mb-4 justify-around">
//         {/* Heading Tabs */}
//         {[1, 2, 3, 4].map((tabNumber) => (
//           <div
//             key={tabNumber}
//             className={`cursor-pointer px-4 transition-all duration-5000 py-2 ${
//               activeTab === tabNumber ? '' : ' '
//             }`}
//             onClick={() => handleTabClick(tabNumber)}
//           >
//             <p>Heading {tabNumber}</p>
//             <div 
//             className={`bg-red-300 w-full h-8cursor-pointer py-2 ${
//               activeTab === tabNumber ? ' w-full' : ' w-0'
//             }`}>

//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Content based on active tab */}
//       <div className="border p-4">
//         {activeTab === 1 && <CardWithImage/>}
//         {activeTab === 2 && <CardWithImage/>}
//         {activeTab === 3 && <CardWithImage/>}
//         {activeTab === 4 && <CardWithImage/>}
//       </div>
//     </div>
//   );
// };

// export default TabNavs;
// TabSlider.js
// TabSlider.js
import React, { useState, useEffect } from 'react';

const TabSlider = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [statusPercentage, setStatusPercentage] = useState(0);

  const tabs = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'];
  const totalTabs = tabs.length;


  const handleNextTab = () => {
    if (currentTab < totalTabs - 1) {
      setCurrentTab(currentTab + 1);
      setStatusPercentage(0); // Reset status bar when switching tabs
    } else {
      // If it's the last tab, go back to the first tab
      setCurrentTab(0);
      setStatusPercentage(0);
    }
  };

  useEffect(() => {
    let interval;

    // Automatically switch to the next tab every 5 seconds
    interval = setInterval(() => {
      handleNextTab();
    }, 1000);

    return () => clearInterval(interval);
  }, [currentTab, totalTabs]);

  return (
    <div className="relative">
      {/* Status bar */}
      <div className="bg-gray-300 h-2 mb-2">
        <div
          className="bg-blue-500 h-full transition-all ease-in-out duration-500"
          style={{ width: `${statusPercentage}%` }}
        ></div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`cursor-pointer p-4 border border-gray-300 ${
              index === currentTab ? 'bg-blue-500 text-white w-44' : ''
            }`}
            onClick={() => {
              setCurrentTab(index);
              setStatusPercentage(0);
            }}
          >
            {tab}
            <div className={`w-full bg-red-500 transition-all duration-1000 h-4 ${
              index === currentTab ? ' text-white w-full' : 'w-0'
            }`}></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="p-4 border border-gray-300">
        {/* Your tab content goes here */}
        {tabs[currentTab]}
      </div>
    </div>
  );
};

export default TabSlider;
