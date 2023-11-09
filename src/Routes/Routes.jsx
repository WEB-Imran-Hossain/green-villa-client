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
import Booking from "../Pages/BookingsNowPage/BookNowForm";
import RoomDetails from "../Pages/RoomDetailsPage/RoomDetails";
import BookNowForm from "../Pages/BookingsNowPage/BookNowForm";

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
                path: "/rooms/:id",
                element: <RoomDetails></RoomDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/rooms/${params.id}`)
            },
            {
                path: "/bookingForm/:id",
                element: <BookNowForm></BookNowForm>,
                loader: ({ params }) => fetch(`http://localhost:5000/rooms/${params.id}`)
            }
        ]
    },
]);

export default router;