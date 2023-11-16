import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import MyBookingCard from "./MyBookingCard";
import Swal from "sweetalert2";

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [myBookings, setMyBookings] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/bookings?email=${user?.email}`, {
            withCredentials: true,
        })
            .then(res => setMyBookings(res.data))
    }, [user?.email, setMyBookings])
    // console.log(myBookings);

    const handleDelete = (id) => {
        // console.log(" haldle delete", id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#32CD32",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/bookings/${id}`).then(res => {
                    console.log(res.data);
                    const filterData = myBookings.filter(item => item._id !== id)
                    setMyBookings(filterData)
                    Swal.fire({
                        icon: "success",
                        title: "Successful",
                        text: "Booking Deleted Sucessfully",
                    });
                })
            }
          });
      
    }
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
                    <hr />
                </thead>
                {
                    myBookings.map(myBooking => <MyBookingCard key={user?.email} myBooking={myBooking} handleDelete={handleDelete}></MyBookingCard>)
                }
            </table>
        </div>
    );
};

export default MyBookings;