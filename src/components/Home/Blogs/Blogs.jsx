import SectionText from "../SectionText/SectionText";
import SectionTitle from "../SectionTitle/SectionTitle";

const Blogs = () => {
  return (
    <div className="pt-36">
      {/* content wrapper */}
      <div className="container ">
        <div>
          {/* intro seciton */}
          <div className="flex items-start justify-between pb-12">
            <div>
              <SectionTitle>Blog & News</SectionTitle>
            </div>
            <div className="max-w-[70%]">
              <SectionText>
                Find new and informative blogs and news on our and whole world’s
                updates on tech world. Take a simple break from your work and
                start reading some updates in the world of information and
                technology.
              </SectionText>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
