import PropTypes from "prop-types";

const SectionTitle = ({ children }) => {
  return (
    <div>
      <h1 className="font-humre font-semibold text-primaryNavy text-[2.5rem] leading-[3rem] tracking-[-0.025rem] max-w-[15.6rem]">
        {children}
      </h1>
    </div>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.string,
};

export default SectionTitle;
