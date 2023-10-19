import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
  const products = useLoaderData();
  console.log(products);
  if (!Array.isArray(products)) {
    // Handle the case when products is not an array
    console.error("Products data is not an array:", products);
    return null; // or return an error message or handle the error as needed
  }
  return (
    <div>
        I am a product
      {products.map((product) => (
        <Product key={product._id} product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
