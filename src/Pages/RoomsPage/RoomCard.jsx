import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const RoomCard = ({ room }) => {
    const {
        _id,
        roomCategory,
        imageLg,
        pricePerNight,
        roomSize,
        bookingDuration,
        maxPerson,
    } = room;
    return (
        <div data-aos="flip-left" className="card bg-base-100 shadow-xl border rounded-lg cursor-pointer">
            <figure>
                <img src={imageLg} className="" />
            </figure>
            <div className="card-body p-5">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-black">{roomCategory}</h2>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-[#32CD32]">
                            From ${pricePerNight}/Night
                        </p>
                    </div>

                </div>
            </div>
            <div className="text-end">
                <Link to={`/rooms/${_id}`}>
                    <button className=" btn hover:bg-transparent bg-inherit border-none text-[#FF3811] hover:border-none hover:text-[#32CD32] text-base font-semibold rounded-none normal-case pb-5">
                        {" "}
                        More Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default RoomCard;
