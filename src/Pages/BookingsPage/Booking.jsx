import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
const Booking = () => {
    const room = useLoaderData();
    const { _id, roomCategory, image, pricePerNight } = room;
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const fname = form.fname.value
        const lname = form.lname.value
        const phone = form.phone.value
        const email = user?.email
        const message = form.message.value
        const booking = {
            fname,
            lname,
            phone,
            email,
            message,
            room_id: _id,
            image
        }
        console.log(booking);

        fetch("http://localhost:5000/bookings", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Booking Sucessfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div>
            <h2 className='text-2xl font-bold text-center'>Title: {roomCategory}</h2>
            <p className='text-2xl font-bold text-center'>Price: {pricePerNight}</p>
            <form onSubmit={handleBooking}>
                <div className="card-body">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input type="text" name='fname' placeholder="First Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input type="text" name='lname' placeholder="Last Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="number" name='phone' placeholder="Your Phone" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control col-span-2">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea type="text" name='message' placeholder="Your Message" className="input input-bordered h-32 pt-5" rows="10" cols="20" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn text-white border-[#FF3811]  bg-[#FF3811] hover:border-[#FF3811] text-xl font-semibold rounded-md normal-case hover:bg-[#FF3811]" type="submit" value="Order Confirm" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Booking;