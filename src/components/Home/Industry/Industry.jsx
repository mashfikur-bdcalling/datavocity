import SectionText from "../SectionText/SectionText";
import SectionTitle from "../SectionTitle/SectionTitle";
import IndustryCardWrapper from "./IndustryCardWrapper";

const Industry = () => {
  return (
    <div className="py-32">
      {/* content wrapper */}
      <div className="max-w-customWidth mx-auto">
        {/* intro section */}
        <div className="flex items-start justify-between pb-32">
          <div>
            <SectionTitle>Industries We Serve</SectionTitle>
          </div>
          <div className="max-w-[70%]">
            <SectionText>
              We understand that the IT demands of an educational institution
              are far different from the needs and concerns of a healthcare
              organization. In each industry, we bring your tailored solutions
              so you can do what you do—but faster and better.
            </SectionText>
          </div>
        </div>

        {/* Industry card wrapper */}
        <div>
          <IndustryCardWrapper></IndustryCardWrapper>
        </div>
      </div>
    </div>
  );
};

export default Industry;
