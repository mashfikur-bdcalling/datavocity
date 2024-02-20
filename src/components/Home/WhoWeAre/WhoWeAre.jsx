import SectionTitle from "../SectionTitle/SectionTitle";
import cover from "../../../assets/images/who-we-are-cover.png";
import SectionText from "../SectionText/SectionText";

const WhoWeAre = () => {
  return (
    <div className=" py-10 px-6 2xl:px-0 2xl:py-32 container mx-auto  ">
      {/* content wrapper */}
      <div className="flex flex-col 2xl:flex-row items-start justify-between">
        <SectionTitle>Who We Are?</SectionTitle>
        <div className="2xl:max-w-[70%]">
          <SectionText btnColor={"#fff"}>
            Datavocity is your one partner for all your IT consulting,
            procurement, and services needs. We take a consultative approach to
            bring you all IT solutions—from planning and consulting to
            implementation and ongoing management.
          </SectionText>
        </div>
      </div>
      {/* cover image */}
      <div className=" pt-8 2xl:pt-16 w-full 2xl:h-[48.875rem]">
        <img className="w-full h-full" src={cover} alt="" />
      </div>
    </div>
  );
};

export default WhoWeAre;
