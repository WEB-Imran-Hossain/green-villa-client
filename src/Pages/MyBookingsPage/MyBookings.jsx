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
        <div className="mt-32 max-w-[80vw] mx-auto">
            <table className="table">
                <thead>
                    <h2 className="text-center text-3xl mb-10 text-black">My Booking Informations</h2>
                    <tr>
                        <div className="lg:grid lg:grid-cols-7 text-base flex flex-wrap">
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Checking Date</th>
                        <th>Checkout Date</th>
                        <th>Room Category</th>
                        <th>Status</th>
                        </div>
                    </tr>
                </thead>
                {
                    myBookings.map(myBooking => <MyBookingCard key={user?.email} myBooking={myBooking}></MyBookingCard>)
                }
            </table>
        </div>
    );
};

export default MyBookings;