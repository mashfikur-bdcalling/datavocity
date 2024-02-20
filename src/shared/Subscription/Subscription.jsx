import { Link } from "react-router-dom";
import bg from "../../assets/images/subscription-bg.png";

const Subscription = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="bg-cover bg-center bg-no-repeat mx-5 py-12 rounded-3xl overflow-hidden -mb-16 relative z-30"
    >
      {/* content wrapper */}
      <div className="container flex items-center gap-10 justify-center  ">
        <div>
          <h3 className="font-humre text-4xl font-semibold leading-10 text-white">
            Stay up to date on all Datavocity news
          </h3>
          <p className="text-white text-2xl leading-10 ">
            Sign up for our free newsletter to keep up to date on all our
            technology solutions.
          </p>
        </div>
        <div>
          <Link
            className="inline-block text-white font-humre font-semibold text-xl  px-14 py-5 border-[3px] rounded-[1.25rem]"
            to={"/"}
          >
            Subscribe Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
