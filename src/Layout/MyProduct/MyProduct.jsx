import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Components/useHooks/useAuth";
import useAxiosPublic from "../../Components/useHooks/useAxiosPublic";
import { Link } from "react-router-dom";

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
        <div className="flex justify-between">
          <p>Total Quantity : {userProduct.length}</p>
          <p>Total Price : {}</p>
        </div>
        {userProduct.map((product) => (
          <div key={product._id}>
            <div className="flex justify-between rounded-lg items-center mb-2 bg-orange-100 p-4 ">
                <img className="w-20 border-r-2" src={product.photo} alt="" />
                <p className="text-lg capitalize font-semibold">{product.name}</p>
                <p className="text-lg capitalize font-semibold">{product.brand}</p>
                <p className="text-lg capitalize font-semibold">{product.price}</p>
                <Link to={`/details/${product.productId}`}>See Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MyProduct;
