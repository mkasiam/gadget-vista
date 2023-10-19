import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandProducts from "../BrandProducts/BrandProducts";

const BrandDetails = () => {
  const [brandProducts, setBrandProducts] = useState([]);
  const { brand } = useParams();
  const brands = useLoaderData();
  //   desired brands is coming from the local json
  const desiredBrand = brands.find((details) => details.brand === brand);
  const { id, image } = desiredBrand;
  useEffect(() => {
    fetch("https://gadget-vista-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setBrandProducts(data));
  }, []);
  const desiredBrandProducts = brandProducts.filter(
    (cards) => cards.brand.toLowerCase() === brand.toLowerCase()
  );

  return (
    <>
      {/* Allocated Space for Banner  */}
      <div>
        <img src={image} alt="" />
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
