import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import cover from "../../../assets/images/who-we-are-cover.png";

const WhoWeAre = () => {
  return (
    <div className="py-32 max-w-customWidth mx-auto ">
      {/* content wrapper */}
      <div className="flex items-start justify-between">
        <SectionTitle>Who We Are?</SectionTitle>
        <div className="max-w-[70%]">
          <p className="text-2xl text-[#232323] pb-7">
            Datavocity is your one partner for all your IT consulting,
            procurement, and services needs. We take a consultative approach to
            bring you all IT solutions—from planning and consulting to
            implementation and ongoing management.
          </p>
          <div className="hover--wrapper2 ">
            <Link
              to={"/"}
              className={`common--btn px-12 py-5  border-primaryNavy relative overflow-hidden bg-[linear-gradient(180deg,_#0F0161_0%,_#386DFF_100%)] ease-in-out duration-500 text-primaryNavy  `}
            >
              Learn More
              <div className="w-full h-full  absolute top-0 left-0 opacity-100  flex items-center justify-center">
                {" "}
                Learn More
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* cover image */}
      <div className="pt-16 w-full h-[48.875rem]">
        <img className="w-full h-full" src={cover} alt="" />
      </div>
    </div>
  );
};

export default WhoWeAre;
