import { BsEnvelopeOpen, BsTelephone } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { BiTime } from "react-icons/bi";

const MapLocation = () => {
    return (
        <div className="hero min-h-screen" >
            <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6423.354397529087!2d-118.26036979440008!3d34.049347308753376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b55ce2a9bb%3A0x78efbaded7d0733d!2sJuanita&#39;s%20Restaurant!5e0!3m2!1sen!2sbd!4v1699455009459!5m2!1sen!2sbd"></iframe>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-black">
                <div className="flex items-center space-x-20">
                    <div className="space-y-5">
                        <GrLocation className='text-6xl text-black'></GrLocation>
                        <h2 className="text-4xl font-semibold text-black">Address</h2>
                        <p className='text-2xl font-normal text-black'>PO Box 97845 Baker st. 567, <br />Los Angeles California - US.</p>
                    </div>

                    <div className="space-y-5">
                        <BsEnvelopeOpen className='text-6xl text-black'></BsEnvelopeOpen>
                        <h2 className="text-4xl font-semibold text-black">Email address</h2>
                        <p className='text-2xl font-normal text-black'>booking@Paradise.com - <br />info@Paradise.com</p>
                    </div>

                    <div className="space-y-5">
                        <BsTelephone className='text-6xl text-black'></BsTelephone>
                        <h2 className="text-4xl font-semibold text-black">Telephone</h2>
                        <p className='text-2xl font-normal text-black'>+ 61 (2) 8093 3402 <br />+ 61 (2) 8093 3402</p>
                    </div>

                    <div className="space-y-5">
                        <BiTime className='text-6xl text-black'></BiTime>
                        <h2 className="text-4xl font-semibold text-black">Weekly Open</h2>
                        <p className='text-2xl font-normal text-black'>Monday to Friday 9am - 7pm</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapLocation;