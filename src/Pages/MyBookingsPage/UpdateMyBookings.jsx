import axios from "axios";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateMyBookings = () => {
    const navigate = useNavigate();
    const data = useLoaderData();
    console.log("Updated my booking date", data);

    const handleUpdateDate = (event) => {
        event.preventDefault();
        const checkingDate = event.target.cdate.value;
        const checkOutdate = event.target.chdate.value;
        const updatedDate = {
            checkingDate,
            checkOutdate
        }
        axios.patch(`https://green-villa-server.vercel.app/bookings/${data._id}`, updatedDate).then(res => {
            console.log(res.data);
            if (res.data.matchedCount) {
                Swal.fire({
                    icon: "success",
                    title: "Successful",
                    text: "Booking Date Updated Successfully !",
                });
                navigate("/mybookings")
            }
        })
    }


    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card flex-shrink-0 shadow-2xl bg-base-100 p-5 rounded-none ">
                    <div className="card-body">
                        <h1 className="text-2xl font-semibold text-black">
                            Update your Check In and Check Out Date
                        </h1>
                        <br />
                        <form onSubmit={handleUpdateDate}>
                            <div className="flex gap-3">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text font-bold">Checking Date</span>
                                    </label>
                                    <input
                                        type="date"
                                        name="cdate"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text font-bold">Checkout Date</span>
                                    </label>
                                    <input
                                        type="date"
                                        name="chdate"
                                        placeholder="Zip code/Postal code"
                                        className="input input-bordered"
                                    />
                                </div>
                            </div>


                            <div className="flex gap-3 mt-5">
                                <input
                                    className="btn text-white w-full bg-[#FF3811] border-[#FF3811]  hover:border-[#32CD32] hover:text-[#32CD32] text-lg font-semibold rounded-none normal-case hover:bg-transparent "
                                    type="submit"
                                    value="Submit"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateMyBookings;