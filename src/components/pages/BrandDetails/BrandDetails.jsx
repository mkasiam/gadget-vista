import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandProducts from "../BrandProducts/BrandProducts";

const BrandDetails = () => {
  const [brandProducts, setBrandProducts] = useState([]);
  const { brand } = useParams();
  console.log(typeof brand);
  const brands = useLoaderData();
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
  console.log(desiredBrandProducts);

  return (
    <>
      {/* Allocated Space for Banner  */}
      <div>
        <img src={image} alt="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {
            desiredBrandProducts.map((product)=>(
                <BrandProducts key={product._id} product={product}></BrandProducts>
            ))
        }
      </div>
    </>
  );
};

export default BrandDetails;
