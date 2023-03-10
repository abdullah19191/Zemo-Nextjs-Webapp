import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Header2 = () => {
  return (
    <div className="px-8">
      <div className="px-3 text-white flex flex-col justify-between w-full md:items-start translate-y-[50%] relative top-[50px]">
        <h3 className=" tracking-widest text-2xl  md:text-3xl">DISCOVER</h3>
        <h1 className="tracking-widest text-3xl  md:text-4xl mt-2">A NEW WORLD</h1>
        <p className="tracking-widest  text-xs font-normal text-gray-500 mt-4">
          FOR THOSE WHO WISH FOR MORE
        </p>
      </div>
      <div className=" text-white flex-col justify-center items-center text-center flex my-44 ">
        <h1 className="tracking-widest  text-xs font-normal text-gray-500 mt-4">
          BRINGING THE WORLD CLOSER TOGETHER
        </h1>
        <span className=" font-thin">
          <ExpandMoreIcon style={{ fontSize: 80 }} />{" "}
        </span>
      </div>
    </div>
  );
};

export default Header2;
