import PropTypes from "prop-types";
const Product = ({ product }) => {
  const { name, brand, type, rating, price, details, photo } = product;

  return (
    <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <div>
        <img  src={photo} alt={`${name} image not found`} className="w-full  object-cover bg-cover p-3" />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-lg mb-2 font-semibold">Brand: {brand}</p>
        <p className="text-gray-700 text-lg font-semibold mb-2">Product Type: {type}</p>
        <div className="mb-2">
          <p className="text-gray-700 text-lg font-semibold">Rating: {rating}
          </p>
        </div>
        <p className="text-gray-700 text-xl font-bold mb-2">Price: ${price}</p>
        <p className="text-gray-700 text-lg">Details: {details}</p>
      </div>
    </div>
  );
};
Product.propTypes = {
  product: PropTypes.object,
};
export default Product;
