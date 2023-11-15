import { GrLocation } from "react-icons/gr";
import { BsEnvelopeOpen, BsTelephone } from "react-icons/bs";
const Contact = () => {
    return (
        <div>
            {/* contact form banner */}
            <div
                className="hero h-[80vh]"
                style={{
                    backgroundImage: "url(https://i.ibb.co/wBLVWbk/bg-contact.jpg)",
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md space-y-5">
                        <h4 className="text-xl font-bold text-white">
                            LUXURY HOTEL EXPERIENCE
                        </h4>
                        <h1 className="text-5xl lg:text-7xl font-bold">CONTACT US</h1>
                    </div>
                </div>
            </div>
            {/* contact info */}
            <div className="flex items-center justify-center flex-col lg:flex-row bg-gray-100 pt-20 pb-20 gap-10">
                <div>
                    <form className="card-body md:w-[35rem] md:p-0 mb-10 space-y-5">
                        <h1 className="text-2xl font-semibold text-black">Get in Touch</h1>
                        <div className="flex gap-3">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="input input-bordered rounded-none"
                                    required
                                />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="input input-bordered rounded-none"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input
                                    type="number"
                                    name="phone"
                                    placeholder="Phone"
                                    className="input input-bordered rounded-none"
                                    required
                                />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Address"
                                    className="input input-bordered rounded-none"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-control col-span-2 h-32">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea
                                type="textarea"
                                name="textarea"
                                placeholder="Message"
                                className="input input-bordered p-3 h-32 rounded-none"
                                required
                            />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn text-white bg-[#FF3811] border-[#FF3811]  hover:border-[#32CD32] hover:text-[#32CD32] text-lg font-semibold rounded-none normal-case hover:bg-transparent">
                                <input type="submit" value="Submit" />
                            </button>
                        </div>
                    </form>
                </div>

                <div>
                    <form className="card-body md:w-[35rem] p-20 mb-10 space-y-5 bg-white">
                        <div className="form-control">
                            <GrLocation className="text-3xl"></GrLocation>
                            <h2 className="text-2xl font-semibold text-black">Address</h2>
                            <p className="text-lg font-normal text-[#737373]">
                                Los Angeles, CA 90014, United States.
                            </p>
                        </div>
                        <hr />
                        <div className="form-control">
                            <BsEnvelopeOpen className="text-3xl"></BsEnvelopeOpen>
                            <h2 className="text-2xl font-semibold text-black">
                                Email address
                            </h2>
                            <p className="text-lg font-normal text-[#737373]">
                                booking@Paradise.com <br />
                                info@Paradise.com
                            </p>
                        </div>
                        <hr />

                        <div className="form-control">
                            <BsTelephone className="text-3xl"></BsTelephone>
                            <h2 className="text-2xl font-semibold text-black">Telephone</h2>
                            <p className="text-lg font-normal text-[#737373]">
                                + 61 (2) 8093 3402 <br />+ 61 (2) 8093 3402
                            </p>
                        </div>
                        <hr />

                        <div className="form-control">
                            <h2 className="text-2xl font-semibold text-black">Weekly Open</h2>
                            <p className="text-lg font-normal text-[#737373]">
                                Monday to Friday 9am - 7pm
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            {/* map location */}
            <div className="hero h-[65vh] mb-32">
                <iframe
                    className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6423.354397529087!2d-118.26036979440008!3d34.049347308753376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b55ce2a9bb%3A0x78efbaded7d0733d!2sJuanita&#39;s%20Restaurant!5e0!3m2!1sen!2sbd!4v1699455009459!5m2!1sen!2sbd"
                ></iframe>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content"></div>
            </div>
          
        </div>
    );
};

export default Contact;
