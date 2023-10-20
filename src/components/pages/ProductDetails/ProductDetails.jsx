import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const ProductDetails = () => {
  const product = useLoaderData();
  const {  name, brand, type, rating, price, details, photo } = product;
  const handleAddToCart = () => {
    const productInfo = {name, brand, price, rating };
    fetch("https://gadget-vista-server.vercel.app/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product Added to Cart Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="card card-side flex flex-col md:flex-row lg:flex-row bg-base-100 shadow-xl md:flex md:space-x-4">
      <div className="w-full md:w-1/2 lg:w-1/2">
        <img src={photo} alt="Product" className="w-full" />
      </div>
      <div className="card-body md:w-1/2">
        <div className="py-4">
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
          <p className="text-gray-700 text-xl font-bold mb-2">
            Price: ${price}
          </p>
          <p className="text-lg text-[#333] font-semibold">{details}</p>
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleAddToCart}
              className="btn btn-active bg-[#8973c0] btn-info rounded-md text-white font-bold"
            >
              Add to Cart
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
