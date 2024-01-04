import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Components/useHooks/useAuth";
import useAxiosPublic from "../../Components/useHooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const MyProduct = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { data: userProduct = [], refetch } = useQuery({
    queryKey: ["userProduct", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/userProduct?email=${user?.email}`);
      return res.data;
    },
  });
  
  const totalPrice = userProduct.reduce((pre,curr) => pre + parseInt(curr.price),0)
  const parint = parseInt(totalPrice)
  console.log(parint);

  const handleDeleted = (id) => {
    
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
        axiosPublic.delete(`/userProduct/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch()
          }
        });
      }
    });
  }
 
  return (
    <div className="px-2 md:px-5 my-10">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex justify-between px-1 mb-2">
          <p className="text-lg  border border-teal-100 font-semibold text-teal-500 rounded px-3   py-1   ">
             Quantity : {userProduct.length}
          </p>
          <p className="text-lg border border-cyan-100 font-semibold text-teal-500 rounded px-3   py-1  ">
            Total Price : {parint.toFixed(2)}
          </p>
        </div>
       <div className="overflow-x-scroll">
       <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-orange-200 ">
              <th className="uppercase font-lexend  font-bold">NO</th>
              <th className="uppercase font-lexend font-bold">Image</th>
              <th className="uppercase font-lexend font-bold">Name</th>
              <th className="uppercase font-lexend font-bold">Brand</th>
              <th className="uppercase font-lexend font-bold">Price</th>
              <th className="uppercase font-lexend font-bold">See Details</th>
              <th className="uppercase font-lexend font-bold">Delete</th>
            </tr>
          </thead>
          <tbody>
            {userProduct.map((product, index) => (
              <tr key={product._id}>
                <th>{index + 1}</th>
                <td>
                  <img className="w-20 rounded-md" src={product.photo} alt="" />
                </td>
                <td>
                  <p className="font-semibold capitalize text-lg">
                    {product.name}
                  </p>
                </td>
                <td>
                  <p className="font-semibold text-lg capitalize">
                    {product.brand}
                  </p>
                </td>
                <td>
                  <p className="font-semibold text-lg capitalize">
                    ${product.price}
                  </p>
                </td>

                <td>
                  <Link to={`/details/${product.productId}`}>
                    <button className="bg-orange-500 rounded text-white px-2 py-1">
                      Details
                    </button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => handleDeleted(product._id)}><FaTrash className="w-7 h-7 bg-red-200 text-red-500 rounded-full p-2"/></button>
                  </td> 
              </tr>
            ))}
          </tbody>
        </table>
       </div>
      </div>
    </div>
  );
};
export default MyProduct;
