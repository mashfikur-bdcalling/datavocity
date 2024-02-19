import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BlogCard = ({ blogTitle, blogThumb, children }) => {
  return (
    <div>
      {/* content wrapper */}
      <div className="bg-primaryBlue w-fit p-6 rounded-[1.85rem]">
        <div className="w-[23.5rem] h-[23.3rem] rounded-[1.85rem] overflow-hidden">
          <img className="w-full h-full object-cover" src={blogThumb} alt="" />
        </div>

        {/* blog text */}
        <div className="space-y-6 pt-6">
          <h3 className="font-humre font-semibold text-[2rem] leading-[3rem] max-w-[20rem] text-white">
            {blogTitle}
          </h3>
          <p className="text-2xl text-white leading[2.5rem] max-w-[23.3rem]">
            {children}
          </p>
          <Link
            to={"/"}
            className="font-humre text-white underline capitalize text-[1.375rem] block w-fit"
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
