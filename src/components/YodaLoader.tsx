import React from "react";
import babyyodaSrc from '../images/baby-yoda.svg';

const YodaLoader = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <img
        src={babyyodaSrc}
        alt="Loading..."
        className="w-16 sm:w-24 md:w-32 lg:w-48 m-5 animate-bounce"
      />
    </div>
  );
};

export default YodaLoader;
