import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import MyBookingCard from "./MyBookingCard";

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [myBookings, setMyBookings] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/bookings?email=${user?.email}`, {
            withCredentials: true,
        })
            .then(res => setMyBookings(res.data))
    }, [user?.email, setMyBookings])
    console.log(myBookings);
    return (
        <div>
          <h2> My Bookings</h2>
        </div>
    );
};

export default MyBookings;