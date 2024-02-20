import SectionText from "../SectionText/SectionText";
import SectionTitle from "../SectionTitle/SectionTitle";
import ServiceCardWrapper from "./ServiceCardWrapper";

import "./Services.css";

const Services = () => {
  return (
    <div className="bg-[#f9f3fe] py-10 px-6 2xl:px-6  2xl:py-40 2xl:pb-48 service-section ">
      {/* content wrapper */}
      <div className="container mx-auto">
        {/* intro section */}
        <div className="flex flex-col 2xl:flex-row justify-between items-start pb-8 2xl:pb-28">
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
