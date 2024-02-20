import PropTypes from "prop-types";

const SectionTitle = ({ children }) => {
  return (
    <div>
      <h1 className="font-humre text-3xl pb-4 2xl:pb-0 font-semibold text-primaryNavy  2xl:text-[2.5rem] 2xl:leading-[3rem] tracking-[-0.025rem]  2xl:max-w-[15.6rem]">
        {children}
      </h1>
    </div>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.string,
};

export default SectionTitle;
