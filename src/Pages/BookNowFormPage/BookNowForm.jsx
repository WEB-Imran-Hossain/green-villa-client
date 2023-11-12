import { Link, useLoaderData } from "react-router-dom";

const BookNowForm = () => {
    const bookingData = useLoaderData();
    console.log("Booking Now Form", bookingData);

    const handleBookingForm = event => {
        event.preventDefault();
        const fname = event.target.fname.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const faddress = event.target.faddress.value;
        const saddress = event.target.saddress.value;
        const country = event.target.country.value;
        const zip = event.target.zip.value;
        console.log(fname, email, phone, faddress, saddress, country, zip);
    }
       
        return (
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="card flex-shrink-0 shadow-2xl bg-base-100 p-5 rounded-none ">
                        <div className="card-body">
                            <h1 className="text-2xl font-semibold text-black">Let us know who you are</h1>

                            <form onSubmit={handleBookingForm}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="fname"
                                        placeholder="Full Name"
                                        className="input input-bordered"
                                        required
                                    />
                                </div>
                                <div className="flex gap-3">
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text font-bold">Email</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            className="input input-bordered"
                                            required
                                        />
                                    </div>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text font-bold">Phone</span>
                                        </label>
                                        <input
                                            type="number"
                                            name="phone"
                                            placeholder="Phone Number"
                                            className="input input-bordered"
                                            required
                                        />
                                    </div>
                                </div>
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
                                <div className="form-control">
                                    <label className="label">
                                    </label>
                                    <textarea name="request" placeholder="Special request" required id="" cols="30" rows="8" className="border-[1px] p-5"></textarea>
                                </div>
                                <br />
                                <div>
                                    <input type="checkbox" required name="terms" id="terms" />
                                    <label className="ml-2 label-text font-bold" htmlFor="terms">
                                        By proceeding with this booking,{" "}<span> <Link className="link link-hover" href="#">
                                            I agree to Green Villa Terms of Use and Privacy Policy.
                                        </Link>
                                        </span>
                                    </label>
                                </div>
                                <div className="flex gap-3">
                                    <div className="form-control mt-6">
                                        <input
                                            className="btn text-white w-24 bg-[#FF3811] border-[#FF3811]  hover:border-[#32CD32] hover:text-[#32CD32] text-lg font-semibold rounded-none normal-case hover:bg-transparent "
                                            type="submit"
                                            value="Previous"
                                        />
                                    </div>
                                    <div className="form-control mt-6">
                                        <input
                                            className="btn text-white w-24 bg-[#FF3811] border-[#FF3811]  hover:border-[#32CD32] hover:text-[#32CD32] text-lg font-semibold rounded-none normal-case hover:bg-transparent "
                                            type="submit"
                                            value="Next"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    export default BookNowForm;
