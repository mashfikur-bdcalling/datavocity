import { Outlet } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

const Layout = () => {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
