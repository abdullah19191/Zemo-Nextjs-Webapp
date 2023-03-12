import React,{useEffect} from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

const VisionGlobe = () => {
  useEffect(() => {
    AOS.init({duration:2000});

  }, [])
  return (
    <div className="px-2 lg:px-6 ">
      <div
        style={{ backgroundImage: `url('/Images/World Map (dots).png')` }}
        className="flex flex-col justify-center items-center text-center object-cover md:h-[860px] h-[660px] bg-no-repeat bg-cover bg-center"
      >
        <h1 data-aos='zoom-out' className="tracking-[.22rem] text-xl  md:text-2xl text-black font-normal">
          GLOBAL VISION
        </h1>
        <p data-aos='zoom-out' className="tracking-wide sm:tracking-wider text-xs font-[600] text-gray-900 mt-6">
          WITH A REMOTE CULTURE, DIVERSITYIS NATURALLY IN OUR DNA
        </p>
        <p data-aos='zoom-out' className="tracking-wide sm:tracking-wider text-xs font-[600] text-gray-900 ">
          BASED ACROS THE GLOBE, MAKING UP OVER 23 DIFFERENT NATIONALITIES
        </p>
      </div>
    </div>
  );
};

export default VisionGlobe;
