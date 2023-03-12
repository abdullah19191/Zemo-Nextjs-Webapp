import React,{useEffect} from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AOS from 'aos'
import 'aos/dist/aos.css'
const Description = () => {
 
  useEffect(() => {
    AOS.init({duration:2000});

  }, [])
  

  return (
    <section className="w-full">
      <div className="px-8" >
        <div data-aos='flip-right' className=" text-xs tracking-[.22rem]  text-center mt-8 font-medium  justify-center flex items-center">
          <p>A REAL ESTATE AND PROPERTY PLATFORM THAT IS CHANGING THE WORLD</p>
        </div>
        <div  className=" mt-10 text-center md:text-left">
          <h3 className="tracking-[.18rem] text-xl  md:text-2xl">
            A REVOLUTIONARY PLATFORM
          </h3>
          <h2 className="tracking-[.27rem] text-2xl md:text-4xl line font-semibold">
            ENTERIES - SELLERS
          </h2>
          <h1 className="text-4xl md:text-6xl tracking-[.35rem]">WORLDWIDE</h1>
        </div>
        <div data-aos='zoom-out' className=" flex flex-col justify-center items-end mt-8 text-center">
          <img
            src="/Logo_s/ZIMO ZIG B.png"
            className=" md:w-80 w-72 mx-auto sm:mx-0"
            alt=""
          />
          <div className="text-center">
            <p className="leading-5 text-xs tracking-[.14rem] mt-4 font-normal ">
              CONNECTING USERS FROM ACROSS THE GLOBE
            </p>
            <p className="leading-5 text-xs tracking-[.12rem]  font-normal ">
              TO FACILATE LIFE'S MOST IMPORTANT
            </p>
            <p className="leading-5 text-xs tracking-[.12rem]  font-normal ">
              PERSONAL TRANSACTIONS
            </p>
          </div>
        </div>
        <div data-aos='zoom-out' className="mt-4 text-center    md:text-left">
          <h1 className="tracking-[.27rem] text-2xl md:text-2xl line font-normal">
            THE BEST OF THE BEST
          </h1>
          <div className="mt-6">
            <p className="leading-5 text-xs tracking-[.10rem]  font-normal ">
              A COMBINATION OF AUTOMATION AND MANUAL CURATION OUR PRO AGENTS AND
            </p>
            <p className="leading-5 text-xs tracking-[.10rem]  font-normal ">
              MODERATION TEAM SELECTS THE HIGHEST QUALITY LISTINGS ON THE MARKET
            </p>
            <p className="leading-5 text-xs tracking-[.10rem]  font-normal ">
              FROM ACROSS THE WORLD
            </p>
          </div>
        </div>
        <div className=" flex justify-center items-center">
          <span className="font-thin material-icons-outlined">
            <ExpandMoreIcon style={{ fontSize: 90, color: "gray" }} />{" "}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Description;
