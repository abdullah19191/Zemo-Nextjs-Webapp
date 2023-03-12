import React,{useEffect} from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Ticket = () => {
  
  useEffect(() => {
    AOS.init({duration:2000});

  }, [])

  return (
    <section className="w-full px-8">
      <div className=" mt-36 flex justify-between items-center flex-col lg:flex-row ">
        <div className="left" data-aos='flip-right'>
          <img src="/Logo_s/ZIMO B.png" alt="" className=" w-72" />
          <div className=" mt-4">
            <h3 className=" tracking-widest text-xl  md:text-2xl">
              ONE SOURCE
            </h3>
            <h1 className="tracking-[.45rem] text-2xl  md:text-3xl mt-2">
              ENTRY TICKETS
            </h1>
            <p className="tracking-widest  text-xs font-normal text-gray-500 mt-4">
              FOR ALL PREMIUM LISTINGS
            </p>
          </div>
        </div>
        <div className="right lg:mr-16 mt-4 lg:mt-0">
          <div className=" max-w-[100%] sm:w-[750px]" data-aos='fade-left'>
            <img
              src="/Images/Property 1821.jpg"
              alt=""
              className="h-full w-full rounded-[1rem]"
            />
          </div>
          <p className="tracking-[.20rem]  text-md font-medium text-center mt-4">
            LET YOUR DREAMS FIND YOU
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ticket;
