import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Layout/Home/Home";
import MyProduct from "../Layout/MyProduct/MyProduct";
import Details from "../Layout/DetailsPage/Details";

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
            }
        ]
    }
])

export default router