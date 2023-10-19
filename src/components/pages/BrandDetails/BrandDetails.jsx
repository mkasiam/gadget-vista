import { useLoaderData, useParams } from "react-router-dom";

const BrandDetails = () => {
    const {brand} = useParams();
    console.log(typeof brand);
    const brands = useLoaderData();
    const desiredBrand = brands.find((details) => details.brand === brand);
    const {id,image} = desiredBrand;
  
    return (
        <div>
            <h1 className="text-2xl">I am brand Details of {id}</h1>
            <img src={image} alt="" />
        </div>
    );
};

export default BrandDetails;