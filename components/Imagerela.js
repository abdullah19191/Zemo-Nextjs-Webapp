import React from "react";

const Imagerela = () => {
  return (
    <div className=" md:px-20 px-8">
      <div className="w-full md:h-[560px] h-[460px] relative">
        <div className=" absolute -top-[140px] w-full ">
          <div className=" flex flex-col  sm:flex-row  justify-between items-center">
            <div className="max-w-[80%] sm:w-[350px] sm:h-[39rem]">
              <img
                src="/Images/Car 1821.jpg"
                alt=""
                className="w-full h-full rounded-[2rem]"
              />
            </div>
            <div className="sm:h-[29rem] max-w-[80%] sm:w-[350px] mt-6 sm:mt-0">
              <img src="/Logo_s/ZIMO ZIG B.png" alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imagerela;
