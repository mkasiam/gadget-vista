import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  const { _id, name, brand, type, rating, price, details, photo } = product;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={photo}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
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
        <p className="text-lg text-[#333] font-semibold">{details}</p>
      <div className="flex gap-4 mt-4">
        <button className="px-4 py-2 bg-[#8973C0] rounded-md text-white font-bold">
          <Link to="/myCart">Add to Cart</Link>
        </button>
        <button className="btn text-[#8973c0] btn-outline rounded-md">
          <Link to="/products">All products</Link>
        </button>
      </div>
      </div>
      </div>
    </div>
  );
};

export default ProductDetails;
