import { Link } from "react-router-dom";
import mainLogo from "../../assets/images/main-logo.png";

import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
import icon4 from "../../assets/images/icon4.png";

const Footer = () => {
  const ulTitle =
    "font-humre text-xl 2xl:text-2xl font-serif leading-7 pb-4 2xl:pb-8";
  const liStyles =
    "font-humre text-lg 2xl:text-xl font-semibold leading-6 flex flex-col  gap-4 2xl:gap-7";

  return (
    <div className="bg-primaryNavy pt-32 pb-8 text-white">
      {/* content wrapper */}
      <div className="container mx-auto px-6 2xl:px-0  ">
        {/* upper footer */}
        <div className="flex flex-col 2xl:flex-row items-start 2xl:gap-28 gap-10 pb-14 2xl:pb-40">
          <div>
            <img
              className=" w-40 h-fit 2xl:w-80 2xl:h-14 object-contain "
              src={mainLogo}
              alt=""
            />
            <p className=" leading-8 2xl:leading-10 text-xl max-w-[26rem] pt-4 2xl:pt-12">
              We are committed to excellence in delivering all of your IT
              solutions.
            </p>
          </div>
          <div>
            <p className={ulTitle}>Links</p>
            <ul className={liStyles}>
              <li>
                <Link to={"/"}> Home </Link>
              </li>
              <li>
                <Link to={"/"}> About Us </Link>
              </li>
              <li>
                <Link to={"/"}> Services </Link>
              </li>
              <li>
                <Link to={"/"}> Industries </Link>
              </li>
              <li>
                <Link to={"/"}> Blog & News </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className={ulTitle}>Contact Details</p>
            <ul className={liStyles}>
              <li>
                <p>Call Us:</p>
                <p>(949) 208-9444</p>
              </li>
              <li>
                <p>Email Us:</p>
                <p>hello@datavocity.com</p>
              </li>
            </ul>
          </div>
          <div>
            <p className={ulTitle}>Social Links</p>
            <ul className="flex gap-6 2xl:gap-9">
              <li>
                <Link>
                  <img src={icon1} alt="" />
                </Link>
              </li>
              <li>
                <Link>
                  <img src={icon2} alt="" />
                </Link>
              </li>
              <li>
                <Link>
                  <img src={icon3} alt="" />
                </Link>
              </li>
              <li>
                <Link>
                  <img src={icon4} alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* lower footer*/}
        <div className="pt-5 border-t-2 border-white flex flex-col 2xl:flex-row items-start 2xl:items-center justify-between text-base leading-8 gap-8">
          <div>
            <p>© 2024 Datavocity Network Enterprise, All Rights Reserved.</p>
          </div>
          <div>
            <ul className="flex 2xl:flex-row flex-col items-start 2xl:items-center 2xl:gap-4">
              <li>
                Do Not Sell My Information{" "}
                <span className="pl-3 hidden 2xl:inline-block">||</span>{" "}
              </li>
              <li>
                Privacy Policy{" "}
                <span className="pl-3 hidden 2xl:inline-block">||</span>
              </li>
              <li>
                Terms & Conditions{" "}
                <span className="pl-3 hidden 2xl:inline-block">||</span>
              </li>
              <li>Site Map</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
