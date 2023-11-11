import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import NotFound from "../Pages/SharePage/NotFound";
import Home from "../Pages/HomePage/Home";
import About from "../Pages/AboutPage/About";
import Login from "../Pages/LoginPage/Login";
import Registration from "../Pages/RegistrationPage/Registration";
import Contact from "../Pages/ContactPage/Contact";
import RoomDetails from "../Pages/RoomDetailsPage/RoomDetails";
import BookNowForm from "../Pages/BookNowFormPage/BookNowForm";
import AllReview from "../Pages/ReviewsPage/AllReview";
import Rooms from "../Pages/RoomsPage/Rooms";
import MyBookings from "../Pages/MyBookingsPage/MyBookings";
import PrivateRoutes from "./PrivateRoutes";

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
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/reviws",
                element: <AllReview></AllReview>
            },
            {
                path: "/rooms/:id",
                element: <PrivateRoutes><RoomDetails></RoomDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/rooms/${params.id}`)
            },
            {
                path: "/bookingForm/:id",
                element: <BookNowForm></BookNowForm>,
                loader: ({ params }) => fetch(`http://localhost:5000/rooms/${params.id}`)
            },
            {
                path: "/bookingForm",
                element: <PrivateRoutes><BookNowForm></BookNowForm></PrivateRoutes>
            }
        ]
    },
]);

export default router;