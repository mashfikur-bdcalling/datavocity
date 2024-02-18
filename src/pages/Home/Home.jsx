import Banner from "../../components/Banner/Banner";
import Navbar from "../../shared/Navbar/Navbar";
import Partner from "../../shared/Partner/Partner";

const Home = () => {
  return (
    <div>
      {/* navbar and banner wrapper */}
      <div className="bg-[#232323]">
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
      <Partner></Partner>
    </div>
  );
};

export default Home;
