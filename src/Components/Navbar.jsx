// Navbar.js
import React, { useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineApple } from "react-icons/ai";


const MobileMenu = ({ isOpen, onClose }) => {
    return (
      <div
        className={`${
          isOpen ? 'h-screen' : 'h-0 opacity-0'
        } md:hidden fixed  z-10 transition-all duration-300 backdrop-blur-xl bg-gradient-to-b from-neutral-50 via-orange-100 to-orange-500  w-screen flex flex-col items-start justify-center gap-10`}
      >

        <div className='flex flex-col justify-between text-4xl pl-3 text-start gap-4'>
        <div className='flex items-center gap-4'>
         <span className='w-2 h-2 rounded-full bg-green-600'></span><span className="text-black mb-2">What</span>
         </div>
         <div className='flex items-center gap-4'>
         <span className='w-2 h-2 rounded-full bg-red-600'></span>
         <span className="text-black mb-2">Why</span>
         </div>
         <div className='flex items-center gap-4'>
         <span className='w-2 h-2 rounded-full bg-yellow-600'></span>
        <span className="text-black mb-2">How</span>
        </div>
        <div className='flex items-center gap-4'>
         <span className='w-2 h-2 rounded-full bg-purple-600'></span>
        <span className="text-black mb-2">Whats new</span>
        </div>
        </div>
       <div className='flex justify-around w-full'>
       <button className="text-black p-2 px-10  bg-white rounded-full text-xl">Login</button>
       <button className="text-black p-2 px-10  bg-white rounded-full text-xl">Signup</button>
       </div>
      </div>
    );
  };

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
    
    
    

    <nav className="bg-gray-400 bg-opacity-50 text-gray-800 backdrop-blur-sm fixed rounded-full text-sm px-3 mt-10 w-10/12 md:w-8/12 mx-auto p-[10px] flex justify-between items-center transform left-[50%] top-[2%] -translate-x-1/2 -translate-y-1/2 z-20">
      {/* Left side */}
      <div className="flex items-center justify-between text-2xl font-semibold">
        <AiOutlineApple className="mr-1" />
        <span>mymind</span>

        {/* Show/hide buttons based on screen size */}
      </div>
        <div className="hidden md:flex gap-4 text-lg">
          <button className=" opacity-70 ">What</button>
          <button className=" opacity-70 ">Why</button>
          <button className=" opacity-70">How</button>
          <button className=" opacity-70">What`s New </button>
        </div>


      {/* Right side */}
      <div className={`hidden md:flex items-center text-[16px] `}>
        <button className=" mr-2">Login</button>
        <button className="text-white bg-gray-600 px-2 py-2 rounded-full">Signup</button>
      </div>

      
      {/* Responsive navigation icon */}
      <div className="md:hidden">
        <button className=" text-3xl p-1 bg-gray-600 text-gray-50 px-2 rounded-2xl my-1" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <RxCross2 /> : <IoIosMenu />}
        </button>
      </div>

      

      {/* Mobile Menu */}
    </nav>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
};

export default Navbar;
