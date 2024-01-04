import { GiHamburgerMenu } from "react-icons/gi";
import useAuth from "../../Components/useHooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import icon from '../../assets/user/user.png'
import { FaShoppingCart } from "react-icons/fa";
import toast from "react-hot-toast";
const Navbar = () => {
    const {user,singout} = useAuth()
const navigate = useNavigate();
        const handleLogOut = () => {
          singout()
            .then((result) => {
              console.log(result);
              toast.success("Logout Successfull");
              navigate("/");
            })
            .catch((error) => {
              console.log(error);
            });
        };
  return (
    <div className="px-2 md:px-5">
      <div className="flex items-center z-30  justify-between lg:py-3   max-w-screen-2xl mx-auto">
        <div className="  flex justify-between font-inter z-30 items-center w-[90%] lg:w-[30%]  mx-auto flex-row-reverse lg:flex-row">
          <div className="block lg:hidden ">
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                <label htmlFor="my-drawer-4" className="drawer-button text-2xl">
                  <GiHamburgerMenu />
                </label>
              </div>
              <div className="drawer-side mt-16">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 z-30 w-[100%] md:w-[60%] flex-col gap-2 min-h-full  backdrop-blur bg-black/30  text-white text-sm">
                  {user ? (
                    <>
                      <div className="flex gap-5   items-center  justify-center">
                        <div className=" border border-orange-500  rounded-[50%] w-[40px] h-[40px]">
                          <img
                            src={user.photoURL}
                            title={user.email}
                            className="w-full h-full rounded-[50%]"
                          />
                        </div>
                        <h1 className="text-xl text-medium text-white">
                          {user.displayName}
                        </h1>
                      </div>

                      <Link
                        to="/"
                        className="py-1 px-5 border-orange-500 border-opacity-40  border text-center hover:bg-orange-500 rounded "
                      >
                        Home
                      </Link>
                      <Link
                        to="/myproduct"
                        className="py-1 px-5 border-orange-500 border-opacity-40  border text-center hover:bg-orange-500 rounded"
                      >
                         My Products
                      </Link>
                     
                      <Link
                        to="/buynow"
                        className="py-1 px-5 border-orange-500 border-opacity-40  border  text-center hover:bg-orange-500 rounded"
                      >
                        <div className="indicator">
                          <button className="py-1 px-3 border-orange-500 border-opacity-40  border text-center text-white rounded">
                            <FaShoppingCart />
                          </button>
                          <span className="indicator-item badge badge- bottom-0">
                            
                          </span>
                        </div>
                      </Link>
                      <button
                        onClick={handleLogOut}
                        className="py-1 px-5 bg-orange-600 hover:bg-orange-500 rounded"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/"
                        className="py-1 px-5 text-center uppercase bg-[#07163d] hover:bg-orange-500 rounded"
                      >
                        Home
                      </Link>
                      <Link
                        to="/allProducts"
                        className="py-1 px-5 uppercase text-center bg-[#07163d] hover:bg-orange-500 rounded"
                      >
                         My Products
                      </Link>
                      
                      <Link
                        to="/singup"
                        className="py-1 px-5 uppercase text-center bg-[#07163d] hover:bg-orange-500 rounded"
                      >
                        Signup
                      </Link>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
         <Link to='/'>
         <div className="flex items-center gap-5">
            <img
              src={icon}
              alt=""
              className="md:w-20 w-16"
            />
            <h1 className="text-lg md:text-2xl first-letter:text-3xl uppercase font-semibold tracking-wider">
                <span className="text-orange-500 ">E</span>M.com
            </h1>
          </div>
         </Link>
        </div>
        <div className="hidden lg:flex w-[70%]">
          <ul className="w-full flex uppercase gap-4 font-semibold font-inter items-center justify-end text-[15px]">
            <Link to="/">Home</Link>
            <Link to="/myproduct">My Products</Link>

            {user ? (
              <>
                <Link to="/buynow" className="mr-3">
                  <div className="indicator">
                    <button className="py-1 px-3 bg-orange-500 text-center text-white rounded">
                      <FaShoppingCart />
                    </button>
                    <span className="indicator-item badge badge-warnon bottom-0">
                    </span>
                  </div>
                </Link>
                <div className=" border border-orange-500 rounded-[50%] w-[40px] h-[40px]">
                  <img
                    src={user.photoURL}
                    title={user.email}
                    className="w-full h-full rounded-[50%]"
                  />
                </div>
                <button
                  onClick={handleLogOut}
                  className="py-1 px-5 bg-orange-500 font-normal text-white hover:bg-orange-500 uppercase rounded"
                >
                   Singout
                </button>
              </>
            ) : (
              <>
                
                <Link
                  to="/login"
                  className="  px-3 py-1 font-normal bg-orange-500 text-white hover:bg-orange-500 rounded"
                >
                  Singup
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
