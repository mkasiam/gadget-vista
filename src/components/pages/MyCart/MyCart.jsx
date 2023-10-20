import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
  const loadProducts = useLoaderData();
  const [products, setProducts] = useState(loadProducts);

  const handleDelete = (id) =>{
    fetch(`https://gadget-vista-server.vercel.app/cart/${id}`,{
      method:"DELETE"
    })
    .then(res => res.json())
    .then(data=>{
      console.log(data);
    })
  }

  return (
    <div>
      <h2>Cart Items: {loadProducts.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.price}</td>
                <td>{product.rating}</td>
                <td>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
