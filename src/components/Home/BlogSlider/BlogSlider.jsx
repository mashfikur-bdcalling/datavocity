import BlogCard from "./BlogCard";

// blog thumb images
import thumbImg from "../../../assets/images/blog-thumb.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// custom css
import "./BlogSlider.css";

// import pagination modules
import { Pagination } from "swiper/modules";

const BlogSlider = () => {
  return (
    <div className="">
      <Swiper
        loop={true}
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
        slidesPerView={3}
        spaceBetween={25}
        breakpoints={{
          375: {
            slidesPerView: 1,
          },
          1520: {
            slidesPerView: 3,
          },
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <SwiperSlide key={i}>
            <BlogCard
              blogThumb={thumbImg}
              blogTitle={"The Rise Of Remote WorkForce"}
            >
              Who knew at the beginning of 2020, that this would be the year
              when
            </BlogCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogSlider;
