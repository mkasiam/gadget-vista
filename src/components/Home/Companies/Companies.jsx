import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Companies = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <div className="my-6">
      <div className="text-center space-y-3 py-2" data-aos="flip-down">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
          Discover Our Featured Brand
        </h1>
        <p className="text-base sm:text-lg  ">
          Get Your Desired Brand Product from Featured Gadget Vista!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 my-4">
        {brands.map((brand) => (
          <div className="p-2 sm:p-4 shadow-md rounded-md bg-[#FFFFFF]" key={brand.id}>
            <Link to={`/${brand?.brand}`}>
              <img
                className="mx-auto w-full h-auto"
                src={brand?.image}
                alt={`Not found ${brand?.brand} image`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
