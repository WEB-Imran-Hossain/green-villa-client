import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const RoomCard = ({ room }) => {
    const navigate = useNavigate();
    const {
        _id,
        roomCategory,
        imageLg,
        pricePerNight,
        roomSize,
        bookingDuration,
        maxPerson,
    } = room;

    const handleViewDetail = () => {
        navigate(`/rooms/${_id}`);
    };

    return (
        <div
            onClick={handleViewDetail}
            data-aos="flip-left"
            className="flex items-center justify-center">
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="h-96 ">
                    <img
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                        src={imageLg}
                        alt=""
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 className="text-3xl font-bold text-white pb-16">
                        {roomCategory}
                    </h1>
                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {roomSize}
                    </p>
                    
                    <div className="text-end">
                        <Link to={`/rooms/${_id}`}>
                            <button className=" btn hover:bg-transparent bg-inherit border-none text-[#FF3811] hover:border-none hover:text-[#32CD32] text-base font-semibold rounded-none normal-case pb-5">
                                {" "}
                                More Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;
