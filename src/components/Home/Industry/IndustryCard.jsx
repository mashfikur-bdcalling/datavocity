import PropTypes from "prop-types";

import cardbg1 from "../../../assets/images/industryCardBg1.png";
import cardbg2 from "../../../assets/images/industryCardBg2.png";
import cardbg3 from "../../../assets/images/industryCardBg3.png";

import arrow from "../../../assets/images/arrow-right.png";

import "./IndustryCard.css";
import { Link } from "react-router-dom";

const IndustryCard = ({
  cardTitle,
  children,
  cardType1,
  cardType2,
  cardType3,
}) => {
  return (
    <div>
      {/* card content */}
      <div
        style={{
          backgroundImage: `url(${
            cardType1 ? cardbg1 : cardType2 ? cardbg2 : cardType3 ? cardbg3 : ""
          })`,
        }}
        className=" pl-4 pt-4   2xl:pl-10 2xl:pt-10 industry-card 2xl:w-[27.5rem] 2xl:h-[32.5rem] relative "
      >
        <h3 className="font-humre text-xl font-semibold text-white 2xl:leading-[3rem] 2xl:text-[2rem] tracking-[0.04rem] pb-2 max-w-[17.3rem]">
          {cardTitle}
        </h3>
        <p className="2xl:text-xl text-base leading-8 pr-8 2xl:pr-0 font-normal 2xl:leading-[2.18rem] pb-14 2xl:pb-0 max-w-[17.3rem] text-white">
          {children}
        </p>

        {/* arrow button */}
        <div className=" w-6 h-6 2xl:w-[2.5rem] 2xl:h-[2.5rem] absolute bottom-3 right-5 2xl:bottom-5 2xl:right-5 -rotate-45">
          <Link to={"/"}>
            <img className="w-full h-full" src={arrow} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

IndustryCard.propTypes = {
  cardTitle: PropTypes.string,
  children: PropTypes.string,
  cardType1: PropTypes.bool,
  cardType2: PropTypes.bool,
  cardType3: PropTypes.bool,
};

export default IndustryCard;
