import { Link, useLoaderData, useNavigate } from "react-router-dom";

const RoomDetails = () => {
    const roomSingleData = useLoaderData();
    const { _id, roomCategory, description, facilities, roomSize, availability, specialOffers, bookNow, unavailableRoomInfo, nextAvailableDate, reasonForUnavailability, reviews, pricePerNight, imageLg } = roomSingleData;
    const navigate = useNavigate();
    console.log(roomSingleData);

    // const handleBookNowButton = () => {
    //     fetch('http://localhost:5173/rooms/654ac2b4be4e594170d5b030', {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json",
    //         },
    //         body: JSON.stringify(roomSingleData),
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.insertedId) {
    //                 Swal.fire(
    //                     'Added',
    //                     'Product added to cart successfully',
    //                     'success'
    //                 )
    //                 navigate("/mybooking")
    //             }
    //         })
    // }
    return (
        <div className="mt-20 mb-20 lg:w-[50vw] mx-auto p-10">
            <div>
                <figure><img className=" rounded-lg lg:w-[70rem] lg:h-[30rem]" src={imageLg} /></figure>
                <div className="absolute w-full lg:h-28 bottom-0 left-0 rounded-b-lg">
                </div>
            </div>

            <div>
                <div className="mt-8">
                    <div className="flex justify-between">
                        <div className="card-actions flex justify-left">
                            <div>
                                <small className="font-medium">Category</small>
                                <div className="badge text-base font-semibold badge-outline ml-2 p-3">{roomCategory}</div>
                            </div>
                        </div>
                        <div className=" justify-right">
                            <div>
                                <small className="font-medium">Special Offers</small>
                                <div className="badge ext-base font-semibold badge-outline ml-2 p-3">{specialOffers}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-between mt-5">
                        <div>
                            <p className="text-3xl font-bold">$ {pricePerNight}</p>
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
                <h2 className="text-4xl font-bold text-[#0B0B0B] mt-8">{roomSize}</h2>
                <p className="text-base font-normal text-[#0b0b0bb3] text-justify mt-3 mb-10">{description}</p>
                <div className="card-actions justify-center">

                    <Link to={`/bookingForm/${_id}`}>
                        <button className="btn bg-[#4e7661] w-40 h-6 text-white text-sm font-semibold border-transparent hover:bg-[#FFF] hover:border-transparent hover:bg-black hover:font-semibold rounded-sm mb-10">
                            Book Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;