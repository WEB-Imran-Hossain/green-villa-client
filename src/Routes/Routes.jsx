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
            // Home page
            {
                path: "/",
                element: <Home></Home>
            },
            // About Page
            {
                path: "/about",
                element: <About></About>
            },
            // Rooms Page
            {
                path: "/rooms",
                element: <Rooms></Rooms>
            },
            // My Bookings Page
            {
                path: "/mybookings",
                element: <PrivateRoutes><MyBookings></MyBookings></PrivateRoutes>
            },
            // Login Page
            {
                path: "/login",
                element: <Login></Login>
            },
            // Registration Page
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            // Contact Page
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            // All Reviews Page
            {
                path: "/reviws",
                element: <AllReview></AllReview>
            },
            // Rooms Details Page
            {
                path: "/rooms/:id",
                element: <PrivateRoutes><RoomDetails></RoomDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/rooms/${params.id}`)
            },
            // Rooms Details Page to Booking Form Page
            {
                path: "/bookingForm/:id",
                element: <BookNowForm></BookNowForm>,
                loader: ({ params }) => fetch(`http://localhost:5000/rooms/${params.id}`)
            }
        ]
    },
]);

export default router;