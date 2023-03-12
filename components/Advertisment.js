import React,{useEffect} from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'


const Advertisment = () => {
  useEffect(() => {
    AOS.init({duration:2000});

  }, [])
  return (
    <section className="w-full md:h-[760px] border-t-2 border-black h-[560px] flex justify-center items-center ">
      <div className="flex  w-[100%] sm:justify-evenly  sm:flex-row flex-col justify-center items-center">
        <div className="" data-aos='fade-right'>
          <img src="/Logo_s/ZIMO B.png" alt="" className="w-52" />
          <h1 className="tracking-widest text-4xl ">PARTENERS</h1>
        </div>
        <div className="flex flex-col mt-12 sm:mt-0" data-aos='fade-left'>
          <img src="/Logo_s/CIVICA CES B.png" alt="" className="w-52" />
          <img src="/Logo_s/Barclays.png" alt="" className="w-52" />
        </div>
      </div>
    </section>
  );
};

export default Advertisment;
