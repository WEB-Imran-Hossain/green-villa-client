import { GrLocation } from 'react-icons/gr';
import { BsEnvelopeOpen, BsTelephone } from 'react-icons/bs';
const Contact = () => {
    return (
        <div >
            {/* contact form banner */}
            <div className="hero h-[80vh]" style={{ backgroundImage: 'url(https://i.ibb.co/wBLVWbk/bg-contact.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md space-y-5">
                        <h4 className="text-xl font-bold text-white">LUXURY HOTEL EXPERIENCE</h4>
                        <h1 className="text-4xl md:text-5xl font-bold">CONTACT US</h1>
                    </div>
                </div>
            </div>
            {/* contact info */}
            <div className="flex items-center justify-center flex-col lg:flex-row bg-gray-100 pt-20 pb-20 gap-10">
                <div>
                    <form className="card-body md:w-[35rem] md:p-0 mb-10 space-y-5">
                        <h1 className="text-2xl font-semibold text-black">Get in Touch</h1>
                        <div className='flex gap-3'>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered rounded-none" required />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered rounded-none" required />
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="number" name="phone" placeholder="Phone" className="input input-bordered rounded-none" required />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" name="address" placeholder="Address" className="input input-bordered rounded-none" required />
                            </div>
                        </div>
                        <div className="form-control col-span-2 h-32">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea type="textarea" name="textarea" placeholder="Message" className="input input-bordered p-3 h-32 rounded-none" required />
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
                            <GrLocation className='text-3xl'></GrLocation>
                            <h2 className="text-2xl font-semibold text-black">Address</h2>
                            <p className='text-lg font-normal text-[#737373]'>PO Box 97845 Baker st. 567, <br />Los Angeles California - US.</p>
                        </div>
                        <hr />
                        <div className="form-control">
                            <BsEnvelopeOpen className='text-3xl'></BsEnvelopeOpen>
                            <h2 className="text-2xl font-semibold text-black">Email address</h2>
                            <p className='text-lg font-normal text-[#737373]'>booking@Paradise.com - <br />info@Paradise.com</p>
                        </div>
                        <hr />

                        <div className="form-control">
                            <BsTelephone className='text-3xl'></BsTelephone>
                            <h2 className="text-2xl font-semibold text-black">Telephone</h2>
                            <p className='text-lg font-normal text-[#737373]'>+ 61 (2) 8093 3402 <br />+ 61 (2) 8093 3402</p>
                        </div>
                        <hr />

                        <div className="form-control">
                            <h2 className="text-2xl font-semibold text-black">Weekly Open</h2>
                            <p className='text-lg font-normal text-[#737373]'>Monday to Friday 9am - 7pm</p>
                        </div>
                    </form>
                </div>
            </div>
            {/* map location */}
            <div className="hero h-[65vh]" style={{ backgroundImage: 'url(https://i.ibb.co/HGzR50X/Google-map.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                </div>
            </div>
            {/* check abibility form */}
            <div className='w-[80vw] mx-auto h-[50vh] mt-20 mb-60'>
                <div className='space-y-4'>
                    <h4 className="text-xl font-bold text-[#32CD32]">Green Villa Hotel</h4>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#151515]">Check Availability</h1>
                   <div>
                  <div className='flex items-center gap-3'>
                  <BsTelephone className='text-3xl'></BsTelephone>
                   <p className='text-base font-bold'>Info and Bookings</p>
                  </div>
                   <div>
                   <p className='text-lg font-normal mt-5 text-[#737373]'>+ 61 (2) 8093 3402</p>
                   </div>
                   </div>
                </div>

                <form className="mt-16 bg-white w-full grid sm:grid-cols-2 lg:grid-cols-6">
                <div className="flex items-center justify-between px-3 py-4 border">
                    <input type="date" className=" normal-case text-sm outline-none border-none w-full" />
                </div>
                <div className="flex items-center justify-between px-3 py-4 border">
                    <input type="date" className="normal-case text-sm outline-none border-none w-full" />
                </div>
                <div className="px-2 py-4 border">
                    <select className="min-w-full normal-case outline-none">
                        <option disabled selected>Adult</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="px-2 py-4 border">
                    <select className="min-w-full normal-case outline-none">
                        <option disabled selected>Children</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="px-2 py-4 border">
                    <select className="min-w-full normal-case outline-none">
                        <option selected>1 Room</option>
                        <option>2 room</option>
                        <option>3 room</option>
                    </select>
                </div>
                <input className='btn text-white bg-[#FF3811] border-[#FF3811]  hover:border-[#32CD32] hover:text-[#32CD32] text-lg font-semibold rounded-none normal-case hover:bg-transparent min-h-[60px] flex items-center justify-center' type="submit" value="Book Now" />
            </form>
            </div>
            
        </div>
    );
};

export default Contact;