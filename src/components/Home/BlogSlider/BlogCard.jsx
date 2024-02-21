import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BlogCard = ({ blogTitle, blogThumb, children }) => {
  return (
    <div>
      {/* content wrapper */}
      <div className="bg-primaryBlue w-fit p-4 2xl:p-6 rounded-[1.85rem]">
        <div className=" w-[100%] h-[15rem] 2xl:w-[23.5rem] 2xl:h-[23.3rem] rounded-[1.85rem] overflow-hidden">
          <img className="w-full h-full object-cover" src={blogThumb} alt="" />
        </div>

        {/* blog text */}
        <div className=" space-y-3 pt-3  2xl:space-y-6 2xl:pt-6">
          <h3 className="font-humre font-semibold text-2xl 2xl:text-[2rem] 2xl:leading-[3rem] max-w-[20rem] text-white">
            {blogTitle}
          </h3>
          <p className=" text-lg 2xl:text-2xl text-white 2xl:leading[2.5rem] max-w-[23.3rem]">
            {children}
          </p>
          <Link
            to={"/"}
            className="font-humre text-lg text-white underline capitalize 2xl:text-[1.375rem] block w-fit"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  blogTitle: PropTypes.string,
  blogThumb: PropTypes.string,
  children: PropTypes.string,
};

export default BlogCard;
