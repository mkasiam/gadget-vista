import Swal from "sweetalert2";
const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form?.name?.value;
    const brand = form?.brand?.value;
    const type = form?.type?.value;
    const rating = form?.rating?.value;
    const price = form?.price?.value;
    const details = form?.details?.value;
    const photo = form?.photo?.value;
    const newProduct = { name, brand, type, rating, price, details, photo };
    console.log(newProduct);

    fetch("https://gadget-vista-server.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <div className="border border-[#FFF] bg-[#FFF] rounded-md p-12 max-w-2xl mx-auto mt-7">
        <h1 className="text-3xl text-[#403F3F] text-center font-semibold mb-4">
          Add New Product
        </h1>
        <div className="w-full space-y-4">
          <div>
            <form onSubmit={handleAddProduct} className="space-y-4">
              {/* Form input field Container  */}
              <div className="flex flex-col md:flex-row lg:flex-row gap-5">
                {/* For Left Side Content  */}
                <div className="flex-1 space-y-2">
                  <div>
                    <label className="text-md font-semibold text-[#403F3F]">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Product Name"
                      name="name"
                      className="input input-bordered bg-white w-full rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-md font-semibold text-[#403F3F]">
                      Rating
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Product rating"
                      name="rating"
                      className="input input-bordered bg-white w-full rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-md font-semibold text-[#403F3F]">
                      Type
                    </label>
                    <input
                      type="text"
                      placeholder="ex. headphone, mobile , laptop"
                      name="type"
                      className="input input-bordered w-full bg-white rounded-md"
                      required
                    />
                  </div>
                </div>
                {/* Form right side Content  */}
                <div className="flex-1 space-y-2">
                  <div>
                    <label className="text-md font-semibold text-[#403F3F]">
                      Brand Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Brand Name"
                      name="brand"
                      className="input input-bordered bg-white w-full rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-md font-semibold text-[#403F3F]">
                      Price
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Coffee Price"
                      name="price"
                      className="input input-bordered bg-white w-full rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-md font-semibold text-[#403F3F]">
                      Photo URL
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Photo URL"
                      name="photo"
                      className="input input-bordered w-full bg-white rounded-md"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="mb-2 text-md font-semibold text-[#403F3F]">
                  Details
                </label>
                <textarea
                  name="details"
                  placeholder="Write a short Description"
                  id="details"
                  cols="30"
                  rows="10"
                  className="border p-1 rounded-md"
                ></textarea>
              </div>
              {/* Final Button  */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="btn bg-[#3ABFF8] hover:bg-[#7cbfdc] text-white w-full rounded-md"
                >
                  ADD
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
