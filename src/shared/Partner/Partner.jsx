import Marquee from "react-fast-marquee";
import company1 from "../../assets/images/company1.svg";
import company2 from "../../assets/images/company2.svg";
import company3 from "../../assets/images/company3.svg";
import company4 from "../../assets/images/company4.svg";
import company5 from "../../assets/images/company5.svg";

const Partner = () => {
  return (
    <div className="pt-16 bg-[#f5f7ff] ">
      <h3 className="text-center text-2xl text-black font-normal">
        Companies We Worked With
      </h3>

      {/* slider wrapper */}
      <div className="pb-20 pt-[3.5rem]">
        <Marquee speed={100} pauseOnHover={true}>
          <div className="flex gap-12 pl-12 ">
            <div className="w-[10.5rem] h-[3.25rem]">
              <img className="w-full h-full" src={company1} alt="" />
            </div>
            <div className="w-[10.5rem] h-[3.25rem]">
              <img className="w-full h-full" src={company2} alt="" />
            </div>
            <div className="w-[10.5rem] h-[3.25rem]">
              <img className="w-full h-full" src={company3} alt="" />
            </div>
            <div className="w-[10.5rem] h-[3.25rem]">
              <img className="w-full h-full" src={company4} alt="" />
            </div>
            <div className="w-[10.5rem] h-[3.25rem]">
              <img className="w-full h-full" src={company5} alt="" />
            </div>
          </div>
          <div className="flex gap-12 pl-12 ">
            <div className="w-[10.5rem] h-[3.25rem]">
              <img className="w-full h-full" src={company1} alt="" />
            </div>
            <div className="w-[10.5rem] h-[3.25rem]">
              <img className="w-full h-full" src={company2} alt="" />
            </div>
            <div className="w-[10.5rem] h-[3.25rem]">
              <img className="w-full h-full" src={company3} alt="" />
            </div>
            <div className="w-[10.5rem] h-[3.25rem]">
              <img className="w-full h-full" src={company4} alt="" />
            </div>
            <div className="w-[10.5rem] h-[3.25rem]">
              <img className="w-full h-full" src={company5} alt="" />
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Partner;
