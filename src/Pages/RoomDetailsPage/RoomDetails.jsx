import { Link, useLoaderData, useNavigate } from "react-router-dom";
import PostReview from "../ReviewsPage/PostReview";

const RoomDetails = () => {
    const roomSingleData = useLoaderData();
    const { _id, roomCategory, description, facilities, roomSize, availability, specialOffers, bookNow, unavailableRoomInfo, nextAvailableDate, reasonForUnavailability, reviews, pricePerNight, imageLg, maxPerson } = roomSingleData;
    const navigate = useNavigate();
    console.log(roomSingleData);


    return (
        <div className="mt-20 mb-20 lg:w-[50vw] mx-auto p-10">
            <div>
                <figure><img className=" rounded-lg lg:w-[70rem] lg:h-[30rem]" src={imageLg} /></figure>
                <div className="absolute w-full lg:h-28 bottom-0 left-0 rounded-b-lg">
                </div>
            </div>

            <div>
                <div className="mt-8">
                    <div className="flex items-center justify-between">
                   
                        <div className="card-actions flex items-center">
                            <div>
                            <small className="font-medium">Category</small>
                                <div className="badge text-base font-semibold badge-outline ml-2 p-3">{roomCategory}</div>
                            </div>
                        </div>
                        <div className=" ">
                            <div className="flex items-center justify-between">
                                <small className="font-medium">Space</small>
                                <div className="badge text-base font-semibold badge-outline ml-2 p-3">{roomSize}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-between mt-5">
                        <div>
                            <p className="text-xl font-bold text-[#32CD32]">Form ${pricePerNight}/Night</p>
                        </div>
                        <div className="rating rating-md">
                            <input type="radio" name="rating-9" className="rating-hidden" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" checked />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                        </div>
                    </div>
                </div>
                <h2 className="text-4xl font-bold text-[#0B0B0B] mt-8">{availability}</h2>
                <p className="text-4xl font-bold text-[#0B0B0B] mt-8">{specialOffers}</p>
                <p className="text-4xl font-bold text-[#0B0B0B] mt-8">{reviews}</p>
                <p className="text-4xl font-bold text-[#0B0B0B] mt-8">Person: {maxPerson}</p>
                <p className="text-base font-normal text-[#0b0b0bb3] text-justify mt-3 mb-10">{description}</p>
                <p className="text-base font-normal text-[#0b0b0bb3] text-justify mt-3 mb-10">{unavailableRoomInfo}</p> */}
                {/* {/* <p className="text-base font-normal text-[#0b0b0bb3] text-justify mt-3 mb-10">{unavailableRoomInfo}</p> */}
                <div className="card-actions justify-center">
                    
                    <Link to={`/bookingForm/${_id}`}>
                        <button className="btn hover:bg-transparent text-white bg-[#FF3811] border-[#FF3811] hover:border-[#32CD32] hover:text-[#32CD32] text-lg font-semibold rounded-none normal-case ">
                            Book Now
                        </button>
                    </Link>
                </div>
                <PostReview></PostReview>
            </div>
        </div>
    );
};

export default RoomDetails;