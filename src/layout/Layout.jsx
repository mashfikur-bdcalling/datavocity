import { Outlet } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import Footer from "../shared/Footer/Footer";

const Layout = () => {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return (
    <div className="">
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
