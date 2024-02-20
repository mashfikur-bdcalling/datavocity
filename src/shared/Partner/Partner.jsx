import Marquee from "react-fast-marquee";
import company1 from "../../assets/images/company1.svg";
import company2 from "../../assets/images/company2.svg";
import company3 from "../../assets/images/company3.svg";
import company4 from "../../assets/images/company4.svg";
import company5 from "../../assets/images/company5.svg";

const Partner = () => {
  let logoArray = [company1, company2, company3, company4, company5];

  return (
    <div className=" pt-10 2xl:pt-16 bg-[#f5f7ff] ">
      <h3 className="text-center text-xl 2xl:text-2xl text-black font-normal">
        Companies We Worked With
      </h3>

      {/* slider wrapper */}
      <div className=" pb-10 pt-10 2xl:pb-20 2xl:pt-[3.5rem]">
        <Marquee speed={100} pauseOnHover={true}>
          <div className="flex gap-12 pl-12 ">
            {logoArray.map((logo, i) => (
              <div
                key={i}
                className=" w-[8rem] h-[2rem] 2xl:w-[10.5rem]   2xl:h-[3.25rem]"
              >
                <img className="w-full h-full" src={logo} alt="" />
              </div>
            ))}
          </div>
          <div className="flex gap-12 pl-12 ">
            {logoArray.map((logo, i) => (
              <div
                key={i}
                className=" w-[8rem] h-[2rem] 2xl:w-[10.5rem]   2xl:h-[3.25rem]"
              >
                <img className="w-full h-full" src={logo} alt="" />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Partner;
