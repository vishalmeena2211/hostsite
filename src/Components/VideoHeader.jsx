import React from 'react'

const VideoHeader = () => {
  return (
    <header className="relative flex items-center bg-red-800 justify-center h-screen  overflow-hidden">
    <div
      className="relative p-5 z-20 text-3xl  md:text-6xl font-[900]  text-white rounded-xl"
    >
     PRABHOTSAVA 2K24 
    </div>
    <video
      autoPlay
      loop
      muted
      className="absolute z-10 w-full min-w-full object-cover min-h-full max-w-none"
    src="https://www.fathom.events/wp-content/uploads/2019/12/sfbg-a.mp4"
    >

      Your browser does not support the video tag.
    </video>
  </header>
  )
}

export default VideoHeader
