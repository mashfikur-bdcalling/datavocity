import Banner from "../../components/Banner/Banner";
import Navbar from "../../shared/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      {/* navbar and banner wrapper */}
      <div className="bg-[#232323]">
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
    </div>
  );
};

export default Home;
