import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import NotFound from "../Pages/SharePage/NotFound";
import Home from "../Pages/HomePage/Home";
import About from "../Pages/AboutPage/About";
import Rooms from "../Pages/RoomsPage/Rooms";
import MyBookings from "../Pages/MyBookingsPage/MyBookings";
import Login from "../Pages/LoginPage/Login";
import Registration from "../Pages/RegistrationPage/Registration";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/rooms",
                element: <Rooms></Rooms>
            },
            {
                path: "/mybookings",
                element: <MyBookings></MyBookings>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            }
        ]
    },
]);

export default router;