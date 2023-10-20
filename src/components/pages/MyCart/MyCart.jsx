import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AiFillDelete } from "react-icons/ai";

const MyCart = () => {
  const loadProducts = useLoaderData();
  const [products, setProducts] = useState(loadProducts);

  const handleDelete = (id) =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://gadget-vista-server.vercel.app/cart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = products.filter(product=>product._id !== id);
              setProducts(remaining);
            }
            
          });
      }
    });
  }

  return (
    <div>
      <h2 className="text-lg md:text-xl lg:text-2xl text-center font-semibold">Cart Items: {loadProducts.products}</h2>
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
                    <AiFillDelete className="text-xl"></AiFillDelete>
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
