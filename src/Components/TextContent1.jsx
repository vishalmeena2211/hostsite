import React from 'react'

const TextContent1 = () => {
  return (
    <div className="flex">
      {/* Left Part */}
      <div className="flex relative items-center justify-center w-1/2 bg-gray-300">
      <video
      autoPlay
      loop
      muted
      class=" min-w-full min-h-full max-w-none"
    src="https://www.fathom.events/wp-content/uploads/2019/12/sfbg-a.mp4"
    >

      Your browser does not support the video tag.
    </video>
        <h1 className="absolute h-full w-full text-center bg-white text-6xl leading-none flex flex-col justify-center mix-blend-screen font-[900]">CREATING <br /> AMAZING <br /> EXPERIENCES <br /> IS WHAT <br /> WE DO.</h1>
      </div>

      {/* Right Part */}
      <div className="w-1/2 pl-20 p-4 ">
        <div className="mb-4">
          <h1 className="text-lg font-bold">Concerts, Music Festivals, and Live Entertainment.</h1>
          <p className='text-sm'>Festival Haus, our Flagship Music and Entertainment brand, is where some of our biggest moments happen. The Fathom // Festival Haus Studio develops, promotes, and produces large-scale Live Concerts and Music Festival events, in-house. Our passion for music runs deep.</p>
        </div>

        <div className="mb-4">
        <h1 className="text-lg font-bold">Concerts, Music Festivals, and Live Entertainment.</h1>
          <p className='text-sm'>Festival Haus, our Flagship Music and Entertainment brand, is where some of our biggest moments happen. The Fathom // Festival Haus Studio develops, promotes, and produces large-scale Live Concerts and Music Festival events, in-house. Our passion for music runs deep.</p>
        </div>

        <div>
        <h1 className="text-lg font-bold">Concerts, Music Festivals, and Live Entertainment.</h1>
          <p className='text-sm'>Festival Haus, our Flagship Music and Entertainment brand, Haus Studio develops, promotes, and produces large-scale Live Concerts and Music Festival events, in-house. Our passion for music runs deep.</p>
        </div>
      </div>
    </div>
  )
}

export default TextContent1
