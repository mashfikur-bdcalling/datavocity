import Banner from "../../components/Home/Banner/Banner";
import Industry from "../../components/Home/Industry/Industry";
import Services from "../../components/Home/Services/Services";
import WhoWeAre from "../../components/Home/WhoWeAre/WhoWeAre";
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
      <WhoWeAre></WhoWeAre>
      <Services></Services>
      <Industry></Industry>
    </div>
  );
};

export default Home;
