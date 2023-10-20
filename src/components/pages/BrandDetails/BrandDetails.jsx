import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandProducts from "../BrandProducts/BrandProducts";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const BrandDetails = () => {
  const [brandProducts, setBrandProducts] = useState([]);
  const { brand } = useParams();
  const brands = useLoaderData();
  const desiredBrand = brands.find((details) => details.brand === brand);
  const { banner1, banner2, banner3 } = desiredBrand || {}; // Ensure that desiredBrand is defined

  useEffect(() => {
    fetch("https://gadget-vista-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setBrandProducts(data));
  }, []);

  // Filter the products only if brand and cards.brand are defined
  const desiredBrandProducts = brand && brandProducts
    ? brandProducts.filter((cards) => cards.brand && cards.brand.toLowerCase() === brand.toLowerCase())
    : [];

  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [banner1, banner2, banner3];

  const slide = (direction) => {
    const newSlide = currentSlide + direction;

    if (newSlide >= 0 && newSlide < images.length) {
      setCurrentSlide(newSlide);
    }
  };

  return (
    <>
      {/* main div to show the banner content  */}
      <div className="relative w-full h-64 lg:h-screen">
        <div className="overflow-hidden w-full h-full">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="w-full h-full flex-shrink-0">
                <img
                  src={image}
                  alt={`Banner ${index + 1}`}
                  className="w-full h-full object-center object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-blue-500 p-2 rounded-full cursor-pointer"
          onClick={() => slide(-1)}
        >
          <FaAngleDoubleLeft></FaAngleDoubleLeft>
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-blue-500 p-2 rounded-full cursor-pointer"
          onClick={() => slide(1)}
        >
          <FaAngleDoubleRight></FaAngleDoubleRight>
        </button>
      </div>
      {desiredBrandProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 my-6">
          {desiredBrandProducts.map((product) => (
            <BrandProducts key={product._id} product={product}></BrandProducts>
          ))}
        </div>
      ) : (
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold text-[#333]">
            Products Are coming Soon....
          </h1>
        </div>
      )}
    </>
  );
};

export default BrandDetails;
