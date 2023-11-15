import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from "react-router-dom";
// ..
AOS.init();

const AllReview = () => {
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
              Welcome to our <strong>Green Villa</strong> hotel, where luxury and comfort
              converge to create an unparalleled experience for our esteemed
              guests. Our meticulously designed hotel rooms and suites are a
              testament to refined elegance, offering a sanctuary of
              sophistication in the heart of city area. Whether you're here for
              business or leisure, our accommodations are tailored to meet the
              diverse needs of today's discerning travelers.
            </p>
          </h5>
        </div>
        <div data-aos="flip-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review._id} review={review}></ReviewCard>
          ))}
        </div>
      </div>
    </div>
    );
};

export default AllReview;