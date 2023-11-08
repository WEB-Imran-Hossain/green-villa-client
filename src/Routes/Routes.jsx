import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import NotFound from "../Pages/SharePage/NotFound";
import Home from "../Pages/HomePage/Home";
import About from "../Pages/AboutPage/About";
import Rooms from "../Pages/RoomsPage/Rooms";
import MyBookings from "../Pages/MyBookingsPage/MyBookings";
import Login from "../Pages/LoginPage/Login";
import Registration from "../Pages/RegistrationPage/Registration";
import Contact from "../Pages/ContactPage/Contact";
import PrivateRoutes from "./PrivateRoutes";
import BookingDetails from "../Pages/MyBookingsPage/BookingDetails";

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
                path: "/rooms/:id",
                element: <Rooms></Rooms>,
                loader: ({ params }) => fetch(`http://localhost:5000/rooms/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/mybooking",
                element: <PrivateRoutes><MyBookings></MyBookings></PrivateRoutes>
            },
            {
                path: "/booking",
                element: <BookingDetails></BookingDetails>
            }
        ]
    },
]);

export default router;