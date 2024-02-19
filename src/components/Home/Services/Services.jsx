import SectionText from "../SectionText/SectionText";
import SectionTitle from "../SectionTitle/SectionTitle";
import ServiceCardWrapper from "./ServiceCardWrapper";

const Services = () => {
  return (
    <div className="bg-[#f9f3fe] py-40 ">
      {/* content wrapper */}
      <div className="max-w-customWidth mx-auto">
        {/* intro section */}
        <div className="flex justify-between items-start pb-[7rem]">
          <div>
            <SectionTitle>Services We Provide</SectionTitle>
          </div>
          <div className="max-w-[70%]">
            <SectionText btnColor={"#f9f3fe"}>
              Our US-based IT professionals will work with you to deliver
              customized solutions for your organization. We provide core
              technology services that are designed to lower your IT costs and
              improve your workflows.
            </SectionText>
          </div>
        </div>

        {/* services card wrapper */}
        <div>
          <ServiceCardWrapper></ServiceCardWrapper>
        </div>
      </div>
    </div>
  );
};

export default Services;
