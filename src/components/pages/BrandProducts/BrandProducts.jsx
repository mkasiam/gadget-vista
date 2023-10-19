import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const BrandProducts = ({ product }) => {
  const { _id,name, brand, type, rating, price, details, photo } = product;
  return (
    <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <div>
        <img
          src={photo}
          alt={`${name} image not found`}
          className="w-full  object-cover bg-cover p-3"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-lg mb-2 font-semibold">
          Brand: {brand}
        </p>
        <p className="text-gray-700 text-lg font-semibold mb-2">
          Product Type: {type}
        </p>
        <div className="mb-2">
          <p className="text-gray-700 text-lg font-semibold">
            Rating: {rating}
          </p>
        </div>
        <p className="text-gray-700 text-xl font-bold mb-2">Price: ${price}</p>
      <div className="flex gap-4 mt-4">
        <button className="px-4 py-2 bg-[#8973C0] rounded-md text-white font-bold">
          <Link to={`update/${_id}`}>Update</Link>
        </button>
        <button className="btn text-[#8973c0] btn-outline rounded-md">
          <Link to={`/details/${_id}`}>Details</Link>
        </button>
      </div>
      </div>
    </div>
  );
};
BrandProducts.propTypes = {
  product: PropTypes.object,
};
export default BrandProducts;
