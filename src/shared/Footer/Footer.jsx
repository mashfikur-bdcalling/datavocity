import { Link } from "react-router-dom";
import mainLogo from "../../assets/images/main-logo.png";

import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
import icon4 from "../../assets/images/icon4.png";

const Footer = () => {
  const ulTitle = "font-humre text-2xl font-serif leading-7 pb-8";
  const liStyles =
    "font-humre text-xl font-semibold leading-6 flex flex-col gap-7";

  return (
    <div className="bg-primaryNavy pt-32 pb-8 text-white">
      {/* content wrapper */}
      <div className="container mx-auto  ">
        {/* upper footer */}
        <div className="flex flex-col 2xl:flex-row items-start gap-28 pb-40">
          <div>
            <img className="w-80 h-14 object-contain " src={mainLogo} alt="" />
            <p className="leading-10 text-xl max-w-[26rem] pt-12">
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
            <ul className="flex gap-9">
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
        <div className="pt-5 border-t-2 border-white flex flex-col 2xl:flex-row items-center justify-between text-base leading-8">
          <div>
            <p>© 2024 Datavocity Network Enterprise, All Rights Reserved.</p>
          </div>
          <div>
            <ul className="flex items-center gap-4">
              <li>
                Do Not Sell My Information <span className="pl-3">||</span>{" "}
              </li>
              <li>
                Privacy Policy <span className="pl-3">||</span>
              </li>
              <li>
                Terms & Conditions <span className="pl-3">||</span>
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
