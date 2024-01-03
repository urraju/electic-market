import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Layout/Home/Home";
import MyProduct from "../Layout/MyProduct/MyProduct";
import Details from "../Layout/DetailsPage/Details";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../Components/PrivateRoute/privateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "myproduct",
        element: <MyProduct />,
      },
      {
        path: "details/:id",
        element: <PrivateRoute>
          <Details />,
        </PrivateRoute>,
        loader : ({params}) => fetch(`http://localhost:3000/products/${params.id}`)
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
