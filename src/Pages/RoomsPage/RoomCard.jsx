import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";


const RoomCard = ({room}) => {
    const { _id, roomCategory, description, imageLg, pricePerNight } = room;
    return (
        <div className="card bg-base-100 shadow-xl border rounded-lg cursor-pointer">
        <figure className="">
            <img src={imageLg} className="w-full" />
        </figure>
        <div className="card-body text-left p-6">
            <h2 className="text-2xl font-bold text-[#444]">{roomCategory}</h2>
            <p>{description}</p>
        </div>
        <div className="flex items-center justify-between p-6 ">
            <p className="text-xl font-semibold text-[#FF3811]">Price: ${pricePerNight}</p>

            <Link to={`/booking/${_id}`}>
            <AiOutlineArrowRight className="text-2xl text-[#FF3811]"></AiOutlineArrowRight>
            </Link>
        </div>
    </div>
    );
};

export default RoomCard;