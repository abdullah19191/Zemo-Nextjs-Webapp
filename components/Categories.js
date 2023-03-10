import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";

const images = [
  "/Images/CARS.png",
  "/Images/JETS.jpg",
  "/Images/WATCHES.png",
  "/Images/PRIVATE ISLANDS.png",
  "/Images/REAL ESTATE.png",
];
const Categories = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 234 },
      items: 1,
    },
  };
  return (
    <section className="w-full">
      <div className="px-8 mt-28">
        <div className=" flex justify-between items-center">
          <h1 className="md:tracking-[.35rem] tracking-[.05rem] text-xl md:text-2xl line font-normal">
            OUR CATEGORIE:
          </h1>
          <div className=" flex justify-between md:w-[4%]">
            <ArrowBackIosIcon style={{ fontSize: 30, color: "gray" }} />
            <ArrowForwardIosIcon style={{ fontSize: 30, color: "gray" }} />
          </div>
        </div>
        <div className=" md:mt-8 mt-6">
          <Carousel
            centerMode={true}
            swipeable={true}
            draggable={false}
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={false}
            //customTransition="all .5"
            //transitionDuration={500}
            containerClass="carousel-container"
            useKeyboardArrows={false}
            removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
            //deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {images.map((url, index) => (
              <div className="h-full w-[100%]  ">
                <img
                  src={url}
                  key={index}
                  className=" w-[80%] md:w-[86%]  md:h-80 h-44 rounded-[1rem] mx-auto sm:rounded-[2rem] "
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="flex justify-center items-center flex-col mt-12 text-center">
          <h1 className="md:tracking-[.38rem] tracking-[.05rem] text-xl md:text-2xl  font-normal">
            ONE PLATFORM FOR ALL PREMIUM LISTINGS
          </h1>
          <p className="mt-2 sm:mt-8 md:tracking-[.29rem] tracking-[.05rem] text-md md:text-lg  font-medium">
            UNLIMITED POTENTIAL
          </p>
        </div>
      </div>
    </section>
  );
};

export default Categories;
