

import React from 'react'

function Splash() {
  return (
    <div className="relative w-full h-screen">
  <video
    className="absolute top-0 left-0 w-full h-full object-cover"
    autoPlay
    loop
    muted
  >
    <source src="src/images/darthvader.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div className="relative z-10 flex items-center justify-center h-full">
    <h1 className="text-white text-5xl font-bold">Welcome to My Website</h1>
  </div>
</div>

  )
}

export default Splash
