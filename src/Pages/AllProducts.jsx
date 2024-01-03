import useAllData from "../Components/useHooks/useAllData";

const AllProducts = () => {
    const [products,refetch] = useAllData()
    console.log(products);
    return(
        <div>
             <p> HELLO I Am AllProducts </p>
        </div>
    )}
export default AllProducts;