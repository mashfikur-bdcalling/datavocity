import SectionTitle from "../SectionTitle/SectionTitle";
import cover from "../../../assets/images/who-we-are-cover.png";
import SectionText from "../SectionText/SectionText";

const WhoWeAre = () => {
  return (
    <div className="py-32 max-w-customWidth mx-auto ">
      {/* content wrapper */}
      <div className="flex items-start justify-between">
        <SectionTitle>Who We Are?</SectionTitle>
        <div className="max-w-[70%]">
          <SectionText btnColor={"#fff"}>
            Datavocity is your one partner for all your IT consulting,
            procurement, and services needs. We take a consultative approach to
            bring you all IT solutions—from planning and consulting to
            implementation and ongoing management.
          </SectionText>
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
