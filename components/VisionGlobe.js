import React from "react";

const VisionGlobe = () => {
  return (
    <div className="px-2 lg:px-6 " data-aos='zoom-out'>
      <div
        style={{ backgroundImage: `url('/Images/World Map (dots).png')` }}
        className="flex flex-col justify-center items-center text-center object-cover md:h-[860px] h-[660px] bg-no-repeat bg-cover bg-center"
      >
        <h1 className="tracking-[.22rem] text-xl  md:text-2xl text-black font-normal">
          GLOBAL VISION
        </h1>
        <p className="tracking-wide sm:tracking-wider text-xs font-[600] text-gray-900 mt-6">
          WITH A REMOTE CULTURE, DIVERSITYIS NATURALLY IN OUR DNA
        </p>
        <p className="tracking-wide sm:tracking-wider text-xs font-[600] text-gray-900 ">
          BASED ACROS THE GLOBE, MAKING UP OVER 23 DIFFERENT NATIONALITIES
        </p>
      </div>
    </div>
  );
};

export default VisionGlobe;
