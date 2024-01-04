
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
const useAllData = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: products = [],
    refetch,
    isPending: loading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      console.log('data');
      const res = await axiosPublic.get("/products");

      return res.data;
    },
  });

  return [products, refetch, loading];
};
export default useAllData;
