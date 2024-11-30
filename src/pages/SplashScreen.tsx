import React, { useEffect } from "react";

interface SplashScreenProps {
  onComplete: () => void; 
}

const SplashScreen = ({ onComplete } : SplashScreenProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete(); // calling onComplete function after 2 seconds
    },4000);

    return () => clearTimeout(timer); // clean on unmount
  }, [onComplete]);

  return (

    // old one with the space background
    // <div className="flex items-center justify-center h-screen bg-space-background animate-fade ease-in bg-contain">
    //   <div className="text-center">
    //     <h1
    //       className="text-10xl md:text-9xl font-bold text-yellow-400 font-starjhol">
    //       STAR WARS
    //     </h1>
    //     <p className="mt-4 text-white text-lg md:text-xl italic font-starjhol">
    //       May the Force be with you
    //     </p>
    //   </div>
    // </div>

    <div className="relative w-full h-screen animate-fade">
  <video
    className="absolute top-0 left-0 w-full h-full object-cover"
    autoPlay
    loop
    muted
  >
    <source src="src/images/darthvader.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div className="relative z-10 flex flex-col items-center justify-center h-full ">
        <h1
          className="text-10xl md:text-9xl font-bold text-yellow-400 font-starjhol italic">
          STAR WARS
        </h1>
        <br/>
        <h3 className="text-white text-4xl md:text-5xl italic font-starjhol">
          May the Force be with you
        </h3>
    </div>
</div>

  );
};

export default SplashScreen;
