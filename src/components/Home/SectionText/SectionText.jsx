import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SectionText = ({ children, btnColor = "#fff" }) => {
  return (
    <div>
      <p className=" text-xl 2xl:text-2xl text-[#232323] pb-6 2xl:pb-7">{children}</p>
      <div className="hover--wrapper2 ">
        <Link
          to={"/"}
          className={`common--btn px-6 py-3 2xl:px-12 2xl:py-5  border-primaryNavy relative overflow-hidden bg-[linear-gradient(180deg,_#0F0161_0%,_#386DFF_100%)] ease-in-out duration-500 text-primaryNavy  `}
        >
          Learn More
          <div
            style={{ backgroundColor: btnColor }}
            className={`w-full h-full  absolute top-0 left-0 opacity-100  flex items-center justify-center `}
          >
            {" "}
            Learn More
          </div>
        </Link>
      </div>
    </div>
  );
};

SectionText.propTypes = {
  children: PropTypes.string,
  btnColor: PropTypes.string,
};

export default SectionText;
