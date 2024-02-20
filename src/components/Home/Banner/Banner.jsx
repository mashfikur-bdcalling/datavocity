import { Link } from "react-router-dom";
import homebanner1 from "../../../assets/images/home-banner1.png";
import homebanner2 from "../../../assets/images/home-banner2.png";

const Banner = () => {
  return (
    <div className=" py-3 pb-8  2xl:py-12 container mx-auto">
      {/* main banner wrapper */}
      <div className=" custom--banner px-6 2xl:px-0 ">
        <div className="flex flex-col gap-12">
          {/* first row */}
          <div className="flex flex-col 2xl:flex-row justify-between items-center">
            {/* text side */}
            <div className="2xl:pl-20">
              <h3 className="font-humre sm:text-2xl pb-6 2xl:pb-0 2xl:text-[3rem] font-semibold text-white 2xl:leading-[3.63rem] tracking-[0.06rem] max-w-[23.12rem] ">
                Helping you to accelerate your IT so you can, accelerate your
                business.
              </h3>
            </div>
            {/* image side */}
            <div>
              <img src={homebanner1} alt="" />
            </div>
          </div>
          {/* second row */}
          <div
            className={`flex flex-col gap-6 2xl:gap-0 2xl:flex-row-reverse items-center justify-between  `}
          >
            {/* text side */}
            <div className={`  2xl:pr-20 mini-hero-bg 2xl:py-[2.5rem]  mr-4 `}>
              <p className="2xl:text-2xl text-xl  text-white font-normal 2xl:leading-[2.45rem] max-w-[32rem] pb-5 2xl:pb-10">
                We are committed to excellence in delivering all of your IT
                solutions.
              </p>
              <Link className="common--btn border-white text-white inline-block w-fit px-6 py-3 2xl:px-12 2xl:py-5 hover:bg-white hover:text-primaryBlue">
                Learn More
              </Link>
            </div>
            {/* image side */}
            <div className="2xl:w-[32rem] 2xl:h-[20rem]">
              <img
                className="w-full h-full object-contain"
                src={homebanner2}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
