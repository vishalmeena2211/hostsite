import React from 'react'

const VideoHeader = () => {
  return (
    <header class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
    <div
      class="relative z-30  p-5 text-6xl forn-[900] font-bold text-white rounded-xl"
    >
     PRABHOSTSAVA 2K24 
    </div>
    <video
      autoPlay
      loop
      muted
      class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
    src="https://www.fathom.events/wp-content/uploads/2019/12/sfbg-a.mp4"
    >

      Your browser does not support the video tag.
    </video>
  </header>
  )
}

export default VideoHeader
