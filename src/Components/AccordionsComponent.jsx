import React, { useState } from 'react';

function AccordionItem({ title, content, isOpen, onToggle }) {
  return (
    <div className={`border border-gray-800 rounded w-4/5 my-4 bg-gray-50 ${isOpen?"text-red-500":""}`}>
      <div
        className="flex justify-between items-center px-4 py-3 cursor-pointer"
        onClick={onToggle}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className={`transform ${isOpen ? 'rotate-0' : 'rotate-180'} transition-transform duration-500 w-4 h-4`}>
          &#x25BE;
        </span>
      </div>
      <div
        // className={`transition-opacity transition-height ease-in-out duration-1000 ${isOpen ? 'opacity-100 h-auto' : 'opacity-0 h-0'} overflow-hidden`}
        className={`transition-height ease-in-out duration-500 ${isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        <div className=" p-4">
          <p className="text-gray-800">{content}</p>
        </div>
      </div>
    </div>
  );
}

function AccordianComponent() {
  const [openLeftAccordion, setOpenLeftAccordion] = useState(null);
  const [openRightAccordion, setOpenRightAccordion] = useState(null);

  const handleLeftAccordionToggle = (index) => {
    setOpenLeftAccordion((prev) => (prev === index ? null : index));
    // setOpenRightAccordion(null); // Close all on the right when opening one on the left
  };

  const handleRightAccordionToggle = (index) => {
    setOpenRightAccordion((prev) => (prev === index ? null : index));
    // setOpenLeftAccordion(null); // Close all on the left when opening one on the right
  };

  return (
    <>
      <h1 className="text-2xl text-center font-semibold my-2">Frequently Asked Questions</h1>
    <div className="container flex flex-col md:flex-row md:justify-center justify-center mx-auto py-8 px-4">
      {/* Left-side Accordions */}
      <div className="flex flex-col items-center md:items-end md:mr-4">
        <AccordionItem
          index={0}
          title="What is React?"
          content="React is a JavaScript library for building user interfaces."
          isOpen={openLeftAccordion === 0}
          onToggle={() => handleLeftAccordionToggle(0)}
        />
        <AccordionItem
          index={1}
          title="How do I install React?"
          content="You can install React using npm or yarn. Visit the official React website for installation instructions."
          isOpen={openLeftAccordion === 1}
          onToggle={() => handleLeftAccordionToggle(1)}
        />
        <AccordionItem
          index={2}
          title="Can I use Tailwind CSS with React?"
          content="Yes, you can use Tailwind CSS with React to quickly style your components."
          isOpen={openLeftAccordion === 2}
          onToggle={() => handleLeftAccordionToggle(2)}
        />
      </div>

      {/* Right-side Accordions */}
      <div className="flex flex-col items-center">
        <AccordionItem
          index={3}
          title="What are React Hooks?"
          content="React Hooks are functions that let you use state and other React features in functional components."
          isOpen={openRightAccordion === 3}
          onToggle={() => handleRightAccordionToggle(3)}
        />
        <AccordionItem
          index={4}
          title="What is JSX?"
          content="JSX is a syntax extension for JavaScript recommended by React for describing what the UI should look like."
          isOpen={openRightAccordion === 4}
          onToggle={() => handleRightAccordionToggle(4)}
        />
        <AccordionItem
          index={5}
          title="How does React handle data?"
          content="React uses a virtual DOM to efficiently update the user interface based on changes to the underlying data."
          isOpen={openRightAccordion === 5}
          onToggle={() => handleRightAccordionToggle(5)}
        />
      </div>
    </div>
    </>
  );
}



export default AccordianComponent;
