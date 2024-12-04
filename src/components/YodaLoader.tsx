import React from "react";
import babyyodaSrc from '../images/baby-yoda.svg';

const YodaLoader = () => {
  return (
      <img
        src={babyyodaSrc}
        alt="Loading..."
        className="w-24 h-24 m-5 animate-bounce" // custom tailwind animation class
      />

  );
};

export default YodaLoader;
