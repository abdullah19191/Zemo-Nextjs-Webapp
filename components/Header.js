import React from "react";

const Header = () => {
  return (
    <div>
      <div style={{backgroundImage: `url('/Images/ZIMO Pro.png')`,}} className="w-full object-cover h-[500px] bg-no-repeat bg-cover bg-center ">
       <div className="text-white flex items-center w-full px-4 py-3">
       <img
              src="/Logo_s/ZIMO Menu Icon W.png"
              alt="logo"
              className="  w-7 mt-2"
            />
       <div className="ml-4 flex relative">
       <img
              src="/Logo_s/ZIMO W.png"
              alt="logo"
              className=" w-24 mt-2 hidden md:block"
            />
            <p className="hidden md:block top-4 left-28 absolute  font-light text-sm  ">ABOUT</p>
       </div>
       <div className=" mx-auto">
       <img className="w-32 mt-2" src="/Logo_s/ZIMO ZIG W.png" alt="Workflow logo"/>
       </div>


       </div>
      </div>
    </div>
  );
};

export default Header;
