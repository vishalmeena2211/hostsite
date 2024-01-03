// ModernStepsComponent.js
import React from 'react';

const StepsComponent = () => {




    const steps = [
        {
          time: '09:00',
          title: 'Step 1',
          description: 'Description for Step 1',
        },
        {
          time: '10:30',
          title: 'Step 2',
          description: 'Description for Step 2',
        },
        {
          time: '13:45',
          title: 'Step 3',
          description: 'Description for Step 3',
        },
        // Add more steps as needed
      ];


  return (
    <div className="flex items-center justify-center mt-8">
      <div className="flex flex-col items-center">
        {steps.map((step, index) => (
          <div key={index} className={`flex items-start ${index !== steps.length - 1 && 'mb-8'}`}>
            <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center">
              <div className={`rounded-full h-8 w-8 bg-blue-500 text-white text-sm flex items-center justify-center ${index === steps.length - 1 && 'bg-gray-300 text-gray-700'}`}>
                {step.time}
              </div>
            </div>
            {(
              <div className="flex-1 h-12 w-1 bg-blue-500 mx-4"></div>
            )}
            <div className="flex flex-col items-start">
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default StepsComponent;
