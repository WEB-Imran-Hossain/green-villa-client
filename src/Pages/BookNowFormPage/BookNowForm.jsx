import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const BookNowForm = () => {
  const { params } = useParams();
  console.log("Paramsa form booking now form", params);

  const bookingData = useLoaderData();
  console.log("Booking Now Form", bookingData._id);
  const { user } = useContext(AuthContext);
  const userNavigate = useNavigate();
  const [booking, setBooking] = useState([]);
  const [bookingInsertedId, setBookingInsertedId] = useState("");

  const exsistingBookingId = booking.find(
    (bookingItem) => bookingItem.roomId === bookingData._id
  );

  const handleBookingForm = (event) => {
    event.preventDefault();
    const fullName = user?.displayName;
    const email = user?.email;

    const phone = event.target.phone.value;
    const checkingDate = event.target.cdate.value;
    const checkOutdate = event.target.chdate.value;
    console.log(fullName, email, phone, checkingDate, checkOutdate);
    const bookingDetails = {
      fullName,
      email,
      phone,
      checkingDate,
      checkOutdate,
      roomId: bookingData._id,
      description: bookingData.description,
      roomCategory: bookingData.roomCategory,
    };

    // checking for booking details
    if (exsistingBookingId) {
      Swal.fire({
        icon: "error",
        title: "Not Avilable",
        text: "This room has been already booked",
      });
      return;
    }

    Swal.fire({
      title: `Confirm your booking`,
      text: `Price per Night: ${bookingData.pricePerNight}, CheckingDate: ${checkingDate}, CheckOutdate: ${checkOutdate}, Room Description: ${bookingData.description}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#32CD32",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirm!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post("http://localhost:5000/bookings", bookingDetails, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
            setBookingInsertedId(res.data.insertedId);
            if (res.data.insertedId) {
              Swal.fire({
                icon: "success",
                title: "Successful",
                text: "Booking Sucessfully",
              });
            }
          });

        // Rooms booking Identifier
        axios
          .patch(`http://localhost:5000/rooms/${bookingData._id}`, {
            status: "booked",
          })
          .then((res) => {
            console.log(res.data);
          });
        userNavigate("/rooms");
      }
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/bookings", {
        withCredentials: true,
      })
      .then((res) => {
        setBooking(res.data);
      });
  }, [bookingInsertedId]);

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="card flex-shrink-0 shadow-2xl bg-base-100 p-5 rounded-none ">
          <div className="card-body">
            <h1 className="text-2xl font-semibold text-black">
              Let us know who you are
            </h1>
            <br />
            <form onSubmit={handleBookingForm}>
              <div className="form-control">
                <p className="text-xl font-bold">Name: {user?.displayName}</p>
              </div>
              <div className="">
                <div className="form-control">
                  <p className="text-xl font-bold">Email: {user?.email}</p>
                </div>
                <div className="form-control mt-5">
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
                <label className="label"></label>
                <textarea
                  name="request"
                  placeholder="Special request"
                  required
                  id=""
                  cols="30"
                  rows="8"
                  className="border-[1px] p-5 rounded-lg"
                ></textarea>
              </div>
              <br />
              <div>
                <input type="checkbox" required name="terms" id="terms" />
                <label className="ml-2 label-text font-bold" htmlFor="terms">
                  By proceeding with this booking,{" "}
                  <span>
                    {" "}
                    <Link className="link link-hover" href="#">
                      I agree to Green Villa Terms of Use and Privacy Policy.
                    </Link>
                  </span>
                </label>
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

export default BookNowForm;
