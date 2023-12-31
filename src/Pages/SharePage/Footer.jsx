import {
    AiOutlineGoogle,
    AiOutlineTwitter,
    AiFillLinkedin,
    AiFillInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer>
            <div className="footer py-28 shadow-2xl flex flex-col text-center lg:flex-row lg:px-14 justify-around items-center">
                <div className="flex flex-col items-center lg:items-start">
                    <div className="flex flex-col items-center lg:text-left lg:items-start">
                        <img
                            className="w-28"
                            src="https://i.ibb.co/09yDWQS/gv-log.png"
                            alt=""
                        />
                        <p className="mt-5 text-base font-normal w-80">
                            One of the best services for unique holidays is Green Villa hotel
                            planning. Green Villa tailored to your specific desires take into
                            account your interests, budget and preferred destinations,
                            ensuring that every aspect of your trip is personalized.
                        </p>
                    </div>
                    <div className="flex text-2xl gap-3 lg:flex-none">
                        <Link>
                            <AiOutlineGoogle></AiOutlineGoogle>
                        </Link>
                        <Link>
                            <AiOutlineTwitter></AiOutlineTwitter>
                        </Link>
                        <Link>
                            {" "}
                            <AiFillInstagram></AiFillInstagram>
                        </Link>
                        <Link>
                            <AiFillLinkedin></AiFillLinkedin>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col items-center md:flex-row md:text-left md:gap-20">
                    {/* explore */}
                    <div className="flex flex-col">
                        <p className="text-lg font-semibold uppercase">Explore</p>
                        <div className="flex flex-col space-y-3">
                        <Link
                            to="/about"
                            className="hover:bg-inherit text-base font-normal mt-3 "
                        >
                            About
                        </Link>
                        <Link
                            to="/rooms"
                            className="hover:bg-inherit text-base font-normal"
                        >
                            Rooms
                        </Link>
                        <Link
                            to="/contact"
                            className="hover:bg-inherit text-base font-normal "
                        >
                            Contact
                        </Link>
                        <Link
                            to="/reviws"
                            className="hover:bg-inherit text-base font-normal "
                        >
                            Testimonials
                        </Link>
                        <Link
                            to="/mybookings"
                            className="hover:bg-inherit text-base font-normal "
                        >
                            My Bookings
                        </Link>
                        </div>
                    </div>
                    {/* contacts */}
                    <div className="lg:-mt-16">
                        <p className="text-lg font-semibold uppercase">Contacts</p>
                        <div className="flex flex-col space-y-3">
                        <p className="text-base font-normal mt-3">
                            Los Angeles, CA 90014, United States.
                        </p>
                        <p className="link link-hover text-base font-normal">
                            info@greenvilla.com
                        </p>
                        <p className="link link-hover text-base font-normal">
                            +434 43242232
                        </p>
                        </div>
                    </div>
                    {/* news letter */}
                    <div className="flex flex-col items-center lg:items-start lg:-mt-16">
                        <p className="text-lg font-semibold uppercase">
                            Newsletter
                        </p>
                        <div className="form-control mt-3">
                            <label className="input-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="input input-bordered lg:w-60 lg:h-14"
                                />
                                <button className="btn hover:bg-transparent text-white bg-[#FF3811] border-[#FF3811] hover:border-[#32CD32] hover:text-[#32CD32] text-lg font-semibold normal-case lg:h-14 lg:w-24 mb-3">
                                    <input type="submit" value="Subscribe" />
                                </button>
                            </label>
                            <p className="text-base font-normal">
                                Receive latest offers and promos without spam. <br />
                                You can cancel anytime.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
