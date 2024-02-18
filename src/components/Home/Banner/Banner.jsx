import { Link } from "react-router-dom";
import homebanner1 from "../../../assets/images/home-banner1.png";
import homebanner2 from "../../../assets/images/home-banner2.png";

const Banner = () => {
  return (
    <div className="py-12 max-w-customWidth mx-auto">
      {/* main banner wrapper */}
      <div className=" custom--banner">
        <div className="flex flex-col gap-12">
          {/* first row */}
          <div className="flex justify-between items-center">
            {/* text side */}
            <div className="pl-20">
              <h3 className="font-humre text-[3rem] font-semibold text-white leading-[3.63rem] tracking-[0.06rem] max-w-[23.12rem] ">
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
            className={`flex flex-row-reverse items-center justify-between  `}
          >
            {/* text side */}
            <div className={`pr-20 mini-hero-bg py-[2.5rem]  mr-4 `}>
              <p className="text-2xl  text-white font-normal leading-[2.45rem] max-w-[32rem] pb-10">
                We are committed to excellence in delivering all of your IT
                solutions.
              </p>
              <Link className="common--btn border-white text-white inline-block w-fit px-12 py-5 ">
                Learn More
              </Link>
            </div>
            {/* image side */}
            <div className="w-[32rem] h-[20rem]">
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
