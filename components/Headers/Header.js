import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Header2 from "./Header2";

const Header = () => {
  return (
    <div>
      <div  style={{ backgroundImage: `url('/Images/ZIMO Pro.png')` }}
        className="w-full object-cover h-[500px] bg-no-repeat bg-cover bg-center">
        <div className="text-white flex items-center w-full px-8 py-3 justify-between">

          <div className=" w-[33%] flex"><img
              src="/Logo_s/ZIMO Menu Icon W.png"
              alt="logo"
              className=" w-7 mt-2"/>
            <div className="ml-4 relative ">
              <img
                src="/Logo_s/ZIMO W.png"
                alt="logo"
                className=" w-24 mt-2 hidden md:block"/>
              <p className="hidden lg:block top-4 left-28 absolute  font-light text-md  ">
                ABOUT
              </p>
            </div>
            </div>

          <div className="w-[33%] flex md:justify-center">
          <img
              className="w-36    mt-2"
              src="/Logo_s/ZIMO ZIG W.png"
              alt="Workflow logo"
            />
          </div>

          <div className=" w-[31%] justify-evenly items-center hidden lg:flex p-2">
          <div className=" flex justify-center items-center ">
          <p className="tracking-wider font-light text-xs text-white lg:mx-2">
              17:23 LONDON UNITED KINGDOM <br />
              <span className="  text-yellow-400 xl:ml-8">
                SUNDAY, 12 FEBRUARY 2023
              </span>
            </p>
           <img
            src="/Images/England.com.png"
            className="w-10  hidden md:block"
            alt="Eng logo"
          />
          </div>
          <span className=" ml-6 text-white">
            <ShoppingBagIcon />
          </span>
          <span className=" mx-4 text-white">
            <PersonIcon />
          </span>
          </div>
        </div>

        <div className="px-8">
        <p className="text-white  tracking-wider text-sm">
          <span className="mr-1">
            <KeyboardBackspaceIcon />
          </span>
          BACK
        </p>
        </div>
        <Header2 />
      </div>
    </div>
  );
};

export default Header;
