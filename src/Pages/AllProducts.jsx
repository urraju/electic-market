import useAllData from "../Components/useHooks/useAllData";
import ProductsCard from "./ProductsCard";

const AllProducts = () => {
    const [products,refetch] = useAllData()
    console.log(products);
    return(
        <div className="px-2 md:px-5 my-20">
            <div className="text-center">
                <h1 className="capitalize font-inter font-bold text-4xl ">Our All <span className="text-orange-500">Products</span></h1>
                <p className="text-lg tracking-wider capitalize mt-2 text-gray-500">You can chose any products and buy now. Lorem ipsum dolor <br /> sit amet, consectetur adipisicing elit. Fuga, culpa!</p>
            </div>
           
           <div className="max-w-screen-2xl mt-10 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {products.map(product => <ProductsCard key={product._id} data={product} refetch={refetch}/>)}
           </div>
        </div>
    )}
export default AllProducts;