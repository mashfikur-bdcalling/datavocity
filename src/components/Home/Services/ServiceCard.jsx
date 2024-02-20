import PropTypes from "prop-types";

import cardbg1 from "../../../assets/images/serviceCardBg1.png";
import cardbg2 from "../../../assets/images/serviceCardBg2.png";
import cardbg3 from "../../../assets/images/serviceCardBg3.png";

// import cardShape from "../../../assets/images/serviceCardMiniBg.png";
import miniShape from "../../../assets/images/mini-hero-bg.png";

import arrow from "../../../assets/images/arrow-right.png";

import "./ServiceCard.css";
import { Link } from "react-router-dom";

const ServiceCard = ({
  cardTitle,
  children,
  cardType1,
  cardType2,
  cardType3,
}) => {
  return (
    <div>
      {/* card content wrapper */}
      <div
        style={{
          backgroundImage: `url(${
            cardType1 ? cardbg1 : cardType2 ? cardbg2 : cardType3 ? cardbg3 : ""
          })`,
        }}
        className=" w-full h-fit px-4 2xl:w-[40.5rem] 2xl:h-[24rem] service-card 2xl:pl-28 py-4 2xl:py-[2.3rem] 2xl:pr-[2.6rem] relative overflow-hidden "
      >
        {/* card title */}
        <h3 className="font-humre font-semibold text-xl 2xl:text-[2rem] 2xl:leading-[3rem] tracking-[0.05rem] text-white relative z-10 2xl:h-24">
          {" "}
          {cardTitle}{" "}
        </h3>

        <p className=" text-lg 2xl:text-2xl text-white 2xl:leading-10 pt-5 pb-9 relative z-10 ">
          {children}
        </p>

        {/* learn more div */}
        <div className="flex items-center justify-between relative z-10  linkArrow">
          <div className="duration-300 ease-in-out">
            <Link
              className="underline pl-12 2xl:pl-0 font-semibold font-humre text-white 2xl:text-[1.35rem] 2xl:leading-[1.8rem] tracking-[-0.01375rem]"
              to={"/"}
            >
              Learn More
            </Link>
          </div>

          <div className="duration-300 ease-in-out  ">
            <img className="w-[80%] 2xl:w-fit" src={arrow} alt="" />
          </div>
        </div>

        {/* card shape */}
        <div className="absolute top-0 right-[-90px]  z-[5] cardShape duration-300 ease-in-out">
          <img className="w-full" src={miniShape} alt="" />
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  cardTitle: PropTypes.string,
  children: PropTypes.string,
  cardType1: PropTypes.bool,
  cardType2: PropTypes.bool,
  cardType3: PropTypes.bool,
};

export default ServiceCard;
