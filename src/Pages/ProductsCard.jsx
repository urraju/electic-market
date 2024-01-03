import { Rating, Star } from "@smastrom/react-rating";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import "@smastrom/react-rating/style.css";
const ProductsCard = ({ data }) => {
  const { _id, name, price,rating, photo } = data;

  const myStyles = {
    itemShapes: Star,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
  }
  return (
    <div>
      <div className="border h-64 relative p-3 rounded border-orange-500 border-opacity-20">
        <img className="w-40 mx-auto" src={photo} alt="" />

        <div className="absolute bottom-3 w-full">
          <p className="bg-orange-500 text-white w-max px-2 border-dotted border-l-2 border-r-2 absolute right-5 -top-8 ">
            20% off
          </p>
          <p className="text-xl font-semibold capitalize">{name}</p>

          <p className="mt-2">
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly itemStyles={myStyles} />
          </p>

          <div className="flex   justify-between items-center">
            <div className="flex gap-5 items-center">
              <p className="text-orange-500 font-semibold text-xl">${price}</p>
              <del className=" font-semibold ">$230</del>
            </div>
            <Link to={`/details/${_id}`}>
              <MdOutlineKeyboardArrowRight className=" w-8 h-8 p-1 bg-orange-50   rounded-full mr-5 text-sm text-orange-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductsCard;
