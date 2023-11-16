import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link, useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const RoomDetails = () => {
  const roomSingleData = useLoaderData();
  const [review, setReview] = useState([]);
  const [buttonDisable, setButtonDisable] = useState(false);
  console.log("checking confir tag", roomSingleData?.status);
  const {
    _id,
    roomCategory,
    description,
    roomSize,
    availability,
    specialOffers,
    pricePerNight,
    imageLg,
    maxPerson,
  } = roomSingleData;
  console.log(roomSingleData);

  useEffect(() => {
    if (roomSingleData.status) {
      setButtonDisable(true);
    }

    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, [roomSingleData.status]);
  const navigate = useNavigate();

  // handle submit button
  const handleBooking = () => {
    if (buttonDisable) {

      return;
    } else { navigate(`/bookingForm/${_id}`) }
  };

  return (
    <div className="mt-20 mb-20 lg:w-[50vw] mx-auto p-10">
      <div>
        <figure>
          <img
            className=" rounded-lg lg:w-[70rem] lg:h-[30rem]"
            src={imageLg}
          />
        </figure>
        <div className="absolute w-full lg:h-28 bottom-0 left-0 rounded-b-lg"></div>
      </div>

      <div className="mt-5">
        <div>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#0B0B0B]">

                {
                  buttonDisable ? "Not Available" : availability
                }
              </h2>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#0B0B0B]">
                {specialOffers}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="card-actions flex items-center">
              <div>
                <small className="font-medium">Category</small>
                <div className="badge text-base font-semibold badge-outline ml-2 p-3">
                  {roomCategory}
                </div>
              </div>
            </div>
            <div className=" ">
              <div className="flex items-center justify-between">
                <small className="font-medium">Space</small>
                <div className="badge text-base font-semibold badge-outline ml-2 p-3">
                  {roomSize}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mt-5">
            <div>
              <p className="text-xl font-bold text-[#32CD32]">
                Form ${pricePerNight}/Night
              </p>
            </div>
            <Rating
              className="text-2xl text-[#FF3811]"
              placeholderRating={roomSingleData?.reviews}
              emptySymbol={<FaRegStar />}
              placeholderSymbol={<FaStar />}
              fullSymbol={<FaStar />}
            />
          </div>
        </div>
        <p className="text-2xl font-bold text-[#0B0B0B] mt-8">
          Person: {maxPerson}
        </p>
        <p className="text-base font-normal text-[#0b0b0bb3] text-justify mt-3 mb-10">
          {description}
        </p>

        <div className="card-actions justify-center">
          <button
            onClick={handleBooking}
            disabled={buttonDisable}
            className="btn hover:bg-transparent text-white bg-[#FF3811] border-[#FF3811] hover:border-[#32CD32] hover:text-[#32CD32] text-lg font-semibold rounded-none normal-case "
          >
            Book Now
          </button>
        </div>
      </div>
      {/* swiper js section */}
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {review.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="card card-side flex flex-col mt-10">
                <div>
                  <figure>
                    <img className="rounded-full w-20" src={review.image_url} />
                  </figure>
                </div>

                <div className="card-body flex items-center">
                  <Rating
                    className="text-2xl text-[#FF3811]"
                    placeholderRating={review?.rating}
                    emptySymbol={<FaRegStar />}
                    placeholderSymbol={<FaStar />}
                    fullSymbol={<FaStar />}
                  />
                  <h2 className="text-xl font-bold">{review.client_name}</h2>

                  <h4 className="text-sm text-[#32CD32]">{review.place}</h4>
                  <p className="text-base font-normal text-[#737373]">
                    {review.comments}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RoomDetails;
