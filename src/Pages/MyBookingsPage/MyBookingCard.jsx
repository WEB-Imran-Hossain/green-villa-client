import { Link } from "react-router-dom";

const MyBookingCard = ({ myBooking, handleDelete }) => {


  return (
    <div className="overflow-x-auto">
      <table className="table table-md">
        <tbody>
          <tr>
            <div className="lg:grid lg:grid-cols-7 text-base flex flex-wrap">
              <td>{myBooking.fullName}</td>
              <td>{myBooking.email}</td>
              <td>{myBooking.phone}</td>
              <td>{myBooking.checkingDate}</td>
              <td>{myBooking.checkOutdate}</td>
              <td>{myBooking.roomCategory}</td>
              <td>
                <div className="join lg:join-vertical join-horizontal lg:space-y-5 items-center gap-5">
                  <div>
                    <button onClick={() => handleDelete(myBooking._id)} className="btn hover:bg-transparent text-white bg-[#FF3811] border-[#FF3811] hover:border-[#32CD32] hover:text-[#32CD32] text-base font-semibold rounded-none normal-case ">
                      Delete
                    </button>
                  </div>
                  <div>
                    <Link to={`/updateMyBookingData/${myBooking._id}`}>
                      <button className="btn hover:bg-transparent text-white bg-[#FF3811] border-[#FF3811] hover:border-[#32CD32] hover:text-[#32CD32] text-base font-semibold rounded-none normal-case ">
                        Update Date
                      </button>
                    </Link>
                  </div>
                  <div>
                    <Link to={`/postReview/${myBooking._id}`}>
                      <button className="btn hover:bg-transparent text-white bg-[#FF3811] border-[#FF3811] hover:border-[#32CD32] hover:text-[#32CD32] text-base font-semibold rounded-none normal-case ">
                        Review
                      </button>
                    </Link>
                  </div>
                </div>
              </td>
              <br />
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyBookingCard;
