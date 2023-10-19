import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
const Product = ({ product }) => {
  const { _id, name, brand, type, rating, price, photo } = product;

  return (
    <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <div>
        <img
          src={photo}
          alt={`${name} image not found`}
          className="w-full  object-cover bg-cover p-3"
        />
      </div>
      <div className="px-6 py-4 text-center">
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-lg mb-2 font-semibold">
            Brand: {brand}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-700 text-lg font-semibold mb-2">
            Product Type: {type}
          </p>
          <div className="mb-2 flex justify-center items-center">
            <p className="text-gray-700 text-lg font-semibold">
              Rating: {rating} 
            </p>
            <AiFillStar className="text-[#FB923C]"></AiFillStar>
          </div>
        </div>
        <p className="text-gray-700 text-xl font-bold mb-2">Price: ${price}</p>
        <button className="btn text-[#8973c0] btn-outline rounded-md w-full">
          <Link to={`/details/${_id}`}>Details</Link>
        </button>
      </div>
    </div>
  );
};
Product.propTypes = {
  product: PropTypes.object,
};
export default Product;
