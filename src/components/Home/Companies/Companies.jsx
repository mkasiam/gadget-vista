import { Link } from "react-router-dom";

const Companies = () => {
  return (
    <div className="my-6">
      <div className="text-center space-y-3 py-2" data-aos="flip-down">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
          Discover Our Featured Brand
        </h1>
        <p className="text-lg text-[#333]">
          Get Your Desired Brand Product from Featured Gadget Vista!
        </p>
      </div>
      <div className="grid gird-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-evenly gap-5 space-y-5">
        {/* Brand-1  */}
        <div>
          <Link to="/googleProducts">
            <img
              className="mx-auto"
              src="https://i.ibb.co/CwXtfwk/google.png"
              alt=""
            />
          </Link>
        </div>
        {/* Brand-2  */}
        <div>
          <Link to="/sonyProducts">
            <img
              className="mx-auto"
              src="https://i.ibb.co/pzbKTMW/sony.png"
              alt=""
            />
          </Link>
        </div>
        {/* Brand-3  */}
        <div>
          <Link to="/intelProducts">
            <img
              className="mx-auto"
              src="https://i.ibb.co/WBRvQ0J/intel.png"
              alt=""
            />
          </Link>
        </div>
        {/* Brand-4  */}
        <div>
          <Link to="/oppoProducts">
            <img
              className="mx-auto"
              src="https://i.ibb.co/ChrqYCC/oppo.png"
              alt=""
            />
          </Link>
        </div>
        {/* Brand-5  */}
        <div>
          <Link to="/xiomiProducts">
            <img
              className="mx-auto"
              src="https://i.ibb.co/cyqwWHd/xiomi.png"
              alt=""
            />
          </Link>
        </div>

        {/* Brand-6  */}
        <div>
          <Link to="/appleProducts">
            <img
              className="mx-auto"
              src="https://i.ibb.co/H79Xhfb/apple.png"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Companies;
