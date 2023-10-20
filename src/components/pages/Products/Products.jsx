import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
  const products = useLoaderData();
  if (!Array.isArray(products)) {
    // Handle the case when products is not an array
    console.error("Products data is not an array:", products);
    return null; // or return an error message or handle the error as needed
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 my-7">
      {products.map((product) => (
        <Product key={product._id} product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
