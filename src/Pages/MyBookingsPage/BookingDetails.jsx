import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyBookings from "./MyBookings";

const BookingDetails = () => {
    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [url]);

    const handleDelete = id => {
        const proceed = confirm('Are you sure want to delete')
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        const remaining = booking.filter(booking => booking._id !== id)
                        setBooking(remaining);

                    }
                })
        }
    }

    const handleBookingConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update status
                    const remaining = booking.filter(booking => booking._id !== id);
                    const updated = booking.find(booking => booking._id === id);
                    updated.status = 'confirm'
                    const newBooking = [updated, ...remaining];
                    setBooking(newBooking);
                }
            })
    }

    return (
        <div>
            <h2 className="text-5xl">Your Orders: {booking.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="flex items-center justify-around space-x-28">
                            <th>Delete</th>
                            <th>Picture</th>
                            <th>Client Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking.map(order => <MyBookings key={booking._id} booking={order} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm} ></MyBookings>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookingDetails;