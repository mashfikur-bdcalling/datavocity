import Banner from "../../components/Home/Banner/Banner";
import Blogs from "../../components/Home/Blogs/Blogs";
import Industry from "../../components/Home/Industry/Industry";
import Services from "../../components/Home/Services/Services";
import Solutions from "../../components/Home/Solutions/Solutions";
import WhoWeAre from "../../components/Home/WhoWeAre/WhoWeAre";
import Navbar from "../../shared/Navbar/Navbar";
import Partner from "../../shared/Partner/Partner";
import Subscription from "../../shared/Subscription/Subscription";

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
      <Solutions></Solutions>
      <Blogs></Blogs>
      <Subscription></Subscription>
    </div>
  );
};

export default Home;
