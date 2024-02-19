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
        className="w-[40.5rem] h-[24rem] service-card pl-28 py-[2.3rem] pr-[2.6rem] relative overflow-hidden"
      >
        {/* card title */}
        <h3 className="font-humre font-semibold text-[2rem] leading-[3rem] tracking-[0.05rem] text-white relative z-10 h-24">
          {" "}
          {cardTitle}{" "}
        </h3>

        <p className="text-2xl text-white leading-10 pt-5 pb-9 relative z-10 ">
          {children}
        </p>

        {/* learn more div */}
        <div className="flex items-center justify-between relative z-10  linkArrow">
          <div className="duration-300 ease-in-out">
            <Link
              className="underline font-semibold font-humre text-white text-[1.35rem] leading-[1.8rem] tracking-[-0.01375rem]"
              to={"/"}
            >
              Learn More
            </Link>
          </div>

          <div className="duration-300 ease-in-out">
            <img src={arrow} alt="" />
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
