import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
// ..
AOS.init();

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="mt-32 max-w-[90vw] mx-auto">
      <div className="p-4 mt-40 lg:mt-0">
        <div className="space-y-5 mb-10">
          <h4 className="text-xl font-bold text-[#32CD32]">
            OUR GUESTS LOVE US
          </h4>
          <h5 className=" text-4xl md:text-5xl font-bold text-[#151515]">
            WHAT OUR GUESTS ARE SAYING ABOUT US
            <p className="py-4 text-base font-normal text-[#737373]">
              Welcome to our <strong>Green Villa</strong> hotel, where luxury
              and comfort converge to create an unparalleled experience for our
              esteemed guests. Our meticulously designed hotel rooms and suites
              are a testament to refined elegance, offering a sanctuary of
              sophistication in the heart of city area. Whether you're here for
              business or leisure, our accommodations are tailored to meet the
              diverse needs of today's discerning travelers.
            </p>
          </h5>
        </div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="card card-side flex flex-col mt-10">
                <div>
                  <figure>
                    <img className="rounded-full w-20" src={review.image_url} />
                  </figure>
                </div>

                <div className="card-body flex items-center">
                  <Rating className="text-2xl text-orange-500"
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

export default Reviews;
