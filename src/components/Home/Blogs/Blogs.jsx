import BlogSlider from "../BlogSlider/BlogSlider";
import SectionText from "../SectionText/SectionText";
import SectionTitle from "../SectionTitle/SectionTitle";

const Blogs = () => {
  return (
    <div className="pt-36 pb-48 relative">
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

          {/* blog slider wrapper */}
          <div>
            <BlogSlider></BlogSlider>
          </div>
        </div>
      </div>

      {/* background shape */}
      <div className="absolute right-10 bottom-[350px] ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="920"
          height="764"
          viewBox="0 0 920 764"
          fill="none"
          className="w-full h-full"
        >
          <path
            opacity="0.2"
            d="M867.414 763.5L476.073 763.5C462.262 763.487 449.02 758 439.254 748.244C429.487 738.488 423.994 725.259 423.98 711.46L423.98 452.668C423.976 428.165 414.232 404.667 396.891 387.34C379.55 370.013 356.032 360.277 331.508 360.271L52.5864 360.271C38.777 360.257 25.537 354.769 15.772 345.013C6.00707 335.257 0.514695 322.029 0.499987 308.232L0.499998 52.5391C0.514708 38.7425 6.00708 25.5146 15.772 15.7584C25.537 6.0022 38.777 0.514606 52.587 0.499962L370.851 0.499976C384.661 0.514621 397.901 6.00221 407.666 15.7584C417.431 25.5146 422.923 38.7425 422.938 52.5397L422.938 268.903C422.943 293.405 432.688 316.901 450.028 334.226C467.369 351.551 490.886 361.287 515.409 361.292L867.413 361.292C881.224 361.307 894.465 366.796 904.23 376.553C913.996 386.311 919.487 399.541 919.5 413.339L919.5 711.461C919.485 725.257 913.993 738.485 904.228 748.242C894.463 757.998 881.223 763.485 867.414 763.5Z"
            stroke="#232323"
          />
        </svg>
      </div>
      {/* background shape */}
      <div className="absolute left-0 bottom-8 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="920"
          height="764"
          viewBox="0 0 920 764"
          fill="none"
          className="w-full h-full"
        >
          <path
            opacity="0.2"
            d="M867.414 763.5L476.073 763.5C462.262 763.487 449.02 758 439.254 748.244C429.487 738.488 423.994 725.259 423.98 711.46L423.98 452.668C423.976 428.165 414.232 404.667 396.891 387.34C379.55 370.013 356.032 360.277 331.508 360.271L52.5864 360.271C38.777 360.257 25.537 354.769 15.772 345.013C6.00707 335.257 0.514695 322.029 0.499987 308.232L0.499998 52.5391C0.514708 38.7425 6.00708 25.5146 15.772 15.7584C25.537 6.0022 38.777 0.514606 52.587 0.499962L370.851 0.499976C384.661 0.514621 397.901 6.00221 407.666 15.7584C417.431 25.5146 422.923 38.7425 422.938 52.5397L422.938 268.903C422.943 293.405 432.688 316.901 450.028 334.226C467.369 351.551 490.886 361.287 515.409 361.292L867.413 361.292C881.224 361.307 894.465 366.796 904.23 376.553C913.996 386.311 919.487 399.541 919.5 413.339L919.5 711.461C919.485 725.257 913.993 738.485 904.228 748.242C894.463 757.998 881.223 763.485 867.414 763.5Z"
            stroke="#232323"
          />
        </svg>
      </div>
    </div>
  );
};

export default Blogs;
