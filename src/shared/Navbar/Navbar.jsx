import { Link, NavLink, useLocation } from "react-router-dom";
import mainLogo from "../../assets/images/main-logo.png";
import mainDarkLogo from "../../assets/images/main-dark-logo.png";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [whiteNav, setWhiteNav] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  // using white or dark navbar on condition
  const location = useLocation();
  let path = location.pathname;
  useEffect(() => {
    if (path === "/about-us") {
      setWhiteNav(true);
    } else {
      setWhiteNav(false);
    }
  }, [path]);

  // changing the location on click button

  return (
    <div>
      <div
        className={`container mx-auto gap-2 2xl:gap-0 flex flex-col 2xl:flex-row items-center justify-between pt-[2.75rem]   2xl:h-fit 2xl:overflow-auto duration-500 ease-in-out ${
          showMobileNav ? "h-[360px] overflow-hidden " : "h-24 overflow-hidden"
        } `}
      >
        {/* main logo */}
        <div className=" sm:w-[12rem] sm:h-[2rem] 2xl:w-[15.25rem] 2xl:h-[2.6875rem] relative flex items-center gap-6 2xl:block">
          {whiteNav ? (
            <Link to="/">
              <img
                className="w-full h-full object-contain"
                src={mainDarkLogo}
                alt=""
              />
            </Link>
          ) : (
            <Link to={"/"}>
              <img
                className="w-full h-full object-contain"
                src={mainLogo}
                alt=""
              />
            </Link>
          )}

          {/* hamburger logo */}
          <div
            onClick={() => setShowMobileNav(!showMobileNav)}
            className={`${
              whiteNav ? "text-black" : "text-white"
            } text-2xl 2xl:hidden `}
          >
            <RxHamburgerMenu />
          </div>
        </div>

        <div className="flex items-center gap-6 2xl:gap-32 flex-col 2xl:flex-row pt-6 2xl:pt-0 ">
          {/* menu links */}
          <div>
            <ul
              className={`flex flex-col gap-4 2xl:flex-row items-center 2xl:gap-[3.75rem] 2xl:text-[1.125rem] font-humre font-semibold  uppercase ${
                whiteNav ? "text-black" : "text-white"
              } `}
            >
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                  to={"/about-us"}
                >
                  ABOUT US
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                  to={"/demo"}
                >
                  INDUSTRIES
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                  to={"/demo"}
                >
                  SERVICES
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                  to={"/demo"}
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>

          {/* contact button */}
          <div
            className={`hover--wrapper ${
              whiteNav ? "hover--wrapper--white " : ""
            } `}
          >
            <Link
              to={"/"}
              className={`common--btn px-6 py-3  2xl:px-12 2xl:py-6 uppercase border-primaryBlue relative overflow-hidden ease-in-out duration-500  ${
                whiteNav ? "text-primaryBlue " : "text-white border-black "
              } `}
            >
              Contact Us
              <div
                className={`w-full h-full  absolute top-0 left-0 opacity-100  flex items-center justify-center text-[10px!important] ${
                  whiteNav ? "bg-[#fff!important] " : ""
                }`}
              >
                {" "}
                Contact Us
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
