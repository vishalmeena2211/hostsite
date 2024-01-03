import React from 'react'

const TextContent1 = () => {
  return (
    <div className="md:flex">
      {/* Left Part */}
      <div className="flex relative items-center justify-center md:w-1/2 ">
      <video
      autoPlay
      loop
      muted
      class=" min-w-full min-h-full max-w-none"
    src="https://www.fathom.events/wp-content/uploads/2019/12/sfbg-a.mp4"
    >

      Your browser does not support the video tag.
    </video>
        <h1 className="absolute h-full w-full text-center bg-white lg:text-6xl md:text-4xl text-3xl leading-none flex flex-col justify-center mix-blend-screen font-[900]">CREATING <br /> AMAZING <br /> EXPERIENCES <br /> IS WHAT <br /> WE DO.</h1>
      </div>

      {/* Right Part */}
      <div className="md:w-1/2  h-full flex flex-col justify-around p-4 ">
        <div className="mb-4">
          <h1 className="text-sm md:text:md lg:text-2xl  font-bold">Concerts, Music Festivals, and Live Entertainment.</h1>
          <p className='text-xs md:text:lg lg:text-xl'>Festival Haus, our Flagship Music and Entertainment brand,  promotes, and produces large-scale Live Concerts and Music Festival events, in-house. Our passion for music runs deep.</p>
        </div>

        <div className="mb-4">
        <h1 className="text-sm md:text:md lg:text-2xl  font-bold">Concerts, Music Festivals, and Live Entertainment.</h1>
          <p className='text-xs md:text:lg lg:text-xl'>Festival Haus, our Flagship Music and Entertainment brand, is where some of our biggest moments happen. Music Festival events, in-house. Our passion for music runs deep.</p>
        </div>

        <div>
        <h1 className="text-sm md:text:md lg:text-2xl  font-bold">Concerts, Music Festivals, and Live Entertainment.</h1>
          <p className='text-xs md:text:lg lg:text-xl'>Festival Haus, our Flagship Music and Entertainment brand, Haus Studio develops, promotes, and produces large-scale Live Concerts and Music Festival events, in-house. Our passion for music runs deep.</p>
        </div>
      </div>
    </div>
  )
}

export default TextContent1
