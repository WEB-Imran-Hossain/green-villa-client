import { BsEnvelopeOpen, BsTelephone } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { TfiTimer } from "react-icons/tfi";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const MapLocation = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl max-w-[90vw] mx-auto mt-32 mb-32">
      <figure><iframe
        data-aos="fade-left"
        className=" w-full lg:w-[70rem] h-[50rem]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6423.354397529087!2d-118.26036979440008!3d34.049347308753376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b55ce2a9bb%3A0x78efbaded7d0733d!2sJuanita&#39;s%20Restaurant!5e0!3m2!1sen!2sbd!4v1699455009459!5m2!1sen!2sbd"
      ></iframe></figure>
      <div className="card-body">
        <div
          data-aos="fade-right"
          className="card-body flex items-center justify-center"
        >
          <div className=" space-y-5">
            <div className="space-y-3 flex flex-col items-center">
              <GrLocation className="text-3xl"></GrLocation>
              <h2 className="text-2xl font-semibold text-black">Address</h2>
              <p className="text-lg font-normal text-[#737373]">
                Los Angeles, CA 90014, United States.
              </p>
            </div>
            <hr />
            <div className="space-y-3 flex flex-col items-center">
              <BsEnvelopeOpen className="text-3xl"></BsEnvelopeOpen>
              <h2 className="text-2xl font-semibold text-black">
                Email address
              </h2>
              <p className="text-lg font-normal link link-hover text-[#737373]">
                booking@paradise.com <br />
                info@paradise.com
              </p>
            </div>
            <hr />

            <div className="space-y-3 flex flex-col items-center">
              <BsTelephone className="text-3xl"></BsTelephone>
              <h2 className="text-2xl font-semibold text-black">Telephone</h2>
              <p className="text-lg font-normal link link-hover text-[#737373]">
                + 61 (2) 8093 3402 <br />+ 61 (2) 8093 3402
              </p>
            </div>
            <hr />

            <div className="space-y-3 flex flex-col items-center">
              <TfiTimer className="text-3xl"></TfiTimer>
              <h2 className="text-2xl font-semibold text-black">Weekly Open</h2>
              <p className="text-lg font-normal text-[#737373]">
                Monday to Friday 9am - 7pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default MapLocation;
