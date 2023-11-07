import { GrLocation } from 'react-icons/gr';
import { BsEnvelopeOpen, BsTelephone } from 'react-icons/bs';
const Contact = () => {
    return (
        <div >
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
        </div>
    );
};

export default Contact;