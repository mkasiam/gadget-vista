import PropTypes from "prop-types";
const Product = ({ product }) => {
  const { _id, name, brand, type, rating, price, details, photo } = product;

  return (
    <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src="product-image.jpg"
        alt="Product"
        className="w-full h-48 object-cover"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Product Name</div>
        <p className="text-gray-700 text-base mb-2">Brand: Brand Name</p>
        <p className="text-gray-700 text-base mb-2">Product Type: Type Name</p>
        <div className="flex items-center mb-2">
          <svg
            className="w-4 h-4 fill-current text-yellow-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 2c-.3 0-.6.1-.8.3l-5.5 3.5-2.3-6.7c-.2-.5-.8-.8-1.3-.6-.5.2-.8.8-.6 1.3l2.5 7.2-5.8 4.8c-.5.4-.6 1.2-.2 1.7.2.2.4.3.7.3.2 0 .4-.1.6-.2l6-5 5.6 5.5c.2.2.4.3.7.3.3 0 .5-.1.7-.3.4-.4.4-1.2 0-1.6l-6-5 5.8-4.8c.4-.5.4-1.3-.1-1.7-.2-.1-.4-.2-.7-.2z" />
          </svg>
          <p className="text-gray-700 text-base ml-1">4.5</p>
        </div>
        <p className="text-gray-700 text-base mb-2">$99.99</p>
        <p className="text-gray-700 text-base">Product details go here.</p>
      </div>
    </div>
  );
};
Product.propTypes = {
  product: PropTypes.object,
};
export default Product;
