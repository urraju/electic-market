import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Components/useHooks/useAuth";
import useAxiosPublic from "../../Components/useHooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { data } from "autoprefixer";

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
  console.log(userProduct);
  return (
    <div className="px-2 md:px-5 my-10">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex justify-between px-1 mb-2">
          <p className="text-lg  border border-teal-100 font-semibold text-teal-500 rounded px-3   py-1   ">
             Quantity : {userProduct.length}
          </p>
          <p className="text-lg border border-cyan-100 font-semibold text-teal-500 rounded px-3   py-1  ">
            Total Price : {}
          </p>
        </div>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MyProduct;
