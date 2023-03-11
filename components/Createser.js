import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EastIcon from "@mui/icons-material/East";

const Createser = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url('/Images/Yacht 1821.jpg')` }}
        className="mt-16 object-cover md:h-[860px] h-[660px] bg-no-repeat bg-cover bg-center"
      >
        <div className="flex  sm:items-end w-full px-8 py-3 sm:justify-end justify-center  items-center">
          <div className=" flex flex-col sm:mr-4   mt-28">
            <h1 className="tracking-[.22rem] text-xl  md:text-2xl text-white">
              PERSONALISED FOR YOU
            </h1>
            <p className="tracking-wider text-xs font-normal text-gray-400 mt-4">
              DELIVERING THOUSANDS OF PERSONALISED ALERTS
            </p>
            <p className="tracking-wider  text-xs font-normal text-gray-400 mt-2 sm:mt-4">
              EVERYDAY, OUR USERS CAN BE FIRST IN LINE WHEN.
            </p>
            <p className="tracking-widest  mr-6  mt-2 text-xs font-normal text-gray-400 sm:mt-4">
              THAT OPPORTUNITY OF A LIFETIME IS HERE.
            </p>
          </div>
        </div>
        <div className="px-8 mt-40 flex flex-col sm:flex-row  items-center sm:mr-4 justify-between text-white tracking-widest">
          <img src="/Logo_s/ZIMO ZIG W.png" alt="" className="w-80" />
          <p className="mt-8 sm:mt-0">
            CREATE USER ID{" "}
            <span>
              <EastIcon style={{ fontSize: 30 }} />
            </span>
          </p>
        </div>
      </div>
    </div>

    //     <section className="w-full">
    // <div
    //         style={{ backgroundImage: `url('/Images/Yacht 1821.jpg')` }}
    //         className="mt-16 object-cover md:h-[860px] h-[660px] bg-no-repeat bg-cover bg-center"
    //       >
    //         <div className="px-8 justify-center  flex flex-col items-end  mt-4 bg-red-400">
    //         <h1 className="tracking-[.22rem] text-xl  md:text-2xl text-white">
    //               PERSONALISED FOR YOU
    //             </h1>
    //             <div className="">
    //             <p className="tracking-wider text-xs font-normal text-gray-400 mt-4">
    //               DELIVERING THOUSANDS OF PERSONALISED ALERTS
    //             </p>
    //             <p className="tracking-wider  text-xs font-normal text-gray-400 mt-2 sm:mt-4">
    //                EVERYDAY, OUR USERS CAN BE FIRST IN LINE WHEN.
    //             </p>
    //             <p className="tracking-widest  mr-6  mt-2 text-xs font-normal text-gray-400 sm:mt-4">
    //               THAT OPPORTUNITY OF A LIFETIME IS HERE.
    //             </p>
    //             </div>
    //           </div>
    //         </div>
    //     </section>
  );
};

export default Createser;
