import { IoIosArrowRoundBack, IoMdCard } from "react-icons/io";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import toast from "react-hot-toast";
import useAuth from "../../Components/useHooks/useAuth";
import useAxiosPublic from "../../Components/useHooks/useAxiosPublic";
import "@smastrom/react-rating/style.css";
import { Rating, Star } from "@smastrom/react-rating";
const Details = () => {
  const data = useLoaderData();
  console.log(Object.keys(data).join(','));
  const {user} = useAuth()
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()
  const {
    _id,name,brand,price,type,description,rating,photo
  } = data;
  const myStyles = {
    itemShapes: Star,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
  }
  const handleBuy = () => {
    const buyProduct = {
      productId : _id,  
      name : name,
      price : price,
      brand : brand,
      photo : photo,
      userEmail : user?.email,
      userName : user?.displayName
    }
    axiosPublic.post('/userProduct', buyProduct)
    .then(result => {
     console.log(result.data);
     toast.success('Buy Successfull')
     navigate('/myproduct')
    })
  }
  return (
    <div className="p-2 md:p-5 mt-10 my-10">
      <div className="max-w-screen-2xl flex items-center justify-center mx-auto">
        <div className="font-inter border-orange-200 w-[800px] border p-1  md:p-3 rounded-xl">
          <img
            className=" mx-auto rounded-xl"
            src={photo}
            alt=""
          />
          <div className="mt-4">
            <p className="text-xl capitalize font-semibold mb-1">
              {" "}
              <span className="text-2xl capitalize font-semibold">Name : </span>
              {name}
            </p>
            <p className="font-bold capitalize">
              {" "}
              <span className="text-lg  font-semibold">Brand : </span>
              {brand}
            </p>
            <p>
              {" "}
              <span className="text-lg font-semibold">Description : </span>
              {description}
            </p>
 

            <p className="capitalize text-orange-500">
              <span className="text-lg text-black font-semibold">Type : </span>
              {type}
            </p>
            <p className="flex gap-4 text-lg font-semibold text-orange-500">
              <span className="text-lg  flex gap-4 text-black font-semibold">Price : </span>
              ${price}
              <del className="text-black font-normal">$350</del>
            </p>

            <p className="mt-2 flex gap-3">
                <span className="text-lg font-semibold">Rating : </span>
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly itemStyles={myStyles} />
          </p>
           
          </div>
          <div className="flex justify-between py-3">
            <Link to='/'>
              <button className=" border border-orange-200 py-1 text-sm text-orange-700 px-2 flex items-center gap-2 rounded-xl ">
                <IoIosArrowRoundBack className="text-lg" />
                Home
              </button>
            </Link>
          <button  onClick={handleBuy}  className="bg-orange-500 text-sm disabled:bg-orange-300 text-white px-3 py-1 flex items-center gap-2 rounded ">
               Add to card <CiShoppingCart className="text-lg mt-1" />
            </button>   
           
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
