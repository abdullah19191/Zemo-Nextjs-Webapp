import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Header2 from "./Header2";

const Header = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url('/Images/ZIMO Pro.png')` }}
        className="w-full object-cover h-[500px] bg-no-repeat bg-cover bg-center">
        <div className="text-white flex items-center w-full px-4 py-3">
          <div className="left_logos flex">
          <img
            src="/Logo_s/ZIMO Menu Icon W.png"
            alt="logo"
            className="  w-7 mt-2"/>
          <div className="ml-4 relative ">
            <img
              src="/Logo_s/ZIMO W.png"
              alt="logo"
              className=" w-24 mt-2 hidden md:block"
            />
            <p className="hidden lg:block top-4 left-28 absolute  font-light text-md  ">
              ABOUT
            </p>
          </div>
          </div>
          
          <div className="lg:ml-[550px] lg:mr-[350px] mx-auto">
            <img
              className="w-36    mt-2"
              src="/Logo_s/ZIMO ZIG W.png"
              alt="Workflow logo"
            />
          </div>
          
          <div className="mt-2 hidden md:block p-2">
            <p className="tracking-wider font-light text-xs text-white">
              17:23 LONDON UNITED KINGDOM <br />
              <span className="  text-yellow-400 ml-8">
                SUNDAY, 12 FEBRUARY 2023
              </span>
            </p>
          </div>
          <img
            src="/Images/England.com.png"
            className="w-10 mt-2 hidden md:block"
            alt="Eng logo"
          />
          <span className=" ml-2 text-white">
            <ShoppingBagIcon />
          </span>
          <span className=" mx-2 text-white">
            <PersonIcon />
          </span>
        </div>
        <p className="text-white  px-4 tracking-wider text-sm"><span className="mr-1"><KeyboardBackspaceIcon/></span>BACK</p>
     <Header2/>
      </div>
    </div>
  );
};

export default Header;
