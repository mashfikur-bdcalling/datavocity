import { Link, NavLink, useLocation } from "react-router-dom";
import mainLogo from "../../assets/images/main-logo.png";
import mainDarkLogo from "../../assets/images/main-dark-logo.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [darkNav, setDarkNav] = useState(false);
  const location = useLocation();
  let path = location.pathname;
  useEffect(() => {
    if (path === "/about-us") {
      setDarkNav(true);
    } else {
      setDarkNav(false);
    }
  }, [path]);
  return (
    <div>
      <div className="max-w-customWidth mx-auto flex items-center justify-between pt-[2.75rem] pb-12">
        {/* main logo */}
        <div className=" w-[15.25rem] h-[2.6875rem] ">
          {darkNav ? (
            <img
              className="w-full h-full object-contain"
              src={mainDarkLogo}
              alt=""
            />
          ) : (
            <img
              className="w-full h-full object-contain"
              src={mainLogo}
              alt=""
            />
          )}
        </div>

        <div className="flex items-center gap-32 ">
          {/* menu links */}
          <div>
            <ul
              className={`flex items-center gap-[3.75rem] text-[1.125rem] font-humre font-semibold  uppercase ${
                darkNav ? "text-black" : "text-white"
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
          <div>
            <Link
              to={"/"}
              className={`common--btn px-12 py-6 ${
                darkNav ? "text-primaryBlue" : "text-white"
              } `}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
