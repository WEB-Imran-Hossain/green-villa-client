import { Link } from "react-router-dom";


const RoomCard = ({room}) => {
    const { _id, roomCategory, imageLg, pricePerNight } = room;
    return (
       
        <div className="card bg-base-100 shadow-xl border rounded-lg cursor-pointer">
        <figure className="">
            <img src={imageLg} className="w-full" />
        </figure>
        <div className="card-body text-left p-6">
            <h2 className="text-2xl font-bold text-black">{roomCategory}</h2>
        </div>
        <div className="flex items-center justify-between p-6 ">
            <p className="text-xl font-semibold text-[#FF3811]">Price: ${pricePerNight}</p>

            <Link to={`/rooms/${_id}`}>
            <button className=" btn hover:bg-transparent bg-inherit border-none text-[#FF3811] hover:border-none hover:text-[#32CD32] text-base font-semibold rounded-none normal-case "> More Details</button>
            </Link>
        </div>
    </div>

    );
};

export default RoomCard;