import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Layout/Home/Home";
import MyProduct from "../Layout/MyProduct/MyProduct";
import Details from "../Layout/DetailsPage/Details";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Root/>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : 'myproduct',
                element : <MyProduct/>
            },
            {
                path : 'details',
                element : <Details/>
            },
            {
                path : 'login',
                element : <Login/>
            },
            {
                path : 'register',
                element : <Register/>
            },
        ]
    }
])

export default router