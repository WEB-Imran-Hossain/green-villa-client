const Contact = () => {
    return (
        <div className="flex items-center justify-around gap-10 shadow-xl bg-slate-200 h-screen">
            <div className="">
                <form className="card-body">
                    <h1 className="text-2xl font-semibold text-black">Get in Touch</h1>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered rounded-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered rounded-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="number" name="phone" placeholder="Phone" className="input input-bordered rounded-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" name="address" placeholder="Address" className="input input-bordered rounded-none" required />
                        </div>

                        <div className="form-control col-span-2 h-32">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea type="textarea" name="textarea" placeholder="Message" className="input input-bordered p-3 h-32 rounded-none" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn text-white bg-[#FF3811] border-[#FF3811]  hover:border-[#32CD32] hover:text-[#32CD32] text-lg font-semibold rounded-none normal-case hover:bg-transparent">
                        <input type="submit" value="Submit" />
                        </button>
                    </div>
                </form>
            </div>

            <div>
                <form className="card-body w-96 bg-white">
                    <div className="form-control">
                        <h2>Address</h2>
                        <p>PO Box 97845 Baker st. 567, <br/>Los Angeles California - US.</p>
                    </div>
                    <hr />
                    <div className="form-control">
                        <h2>Email address</h2>
                        <p>booking@Paradise.com - <br/>info@Paradise.com</p>
                    </div>
                    <hr />

                    <div className="form-control">
                        <h2>Telephone</h2>
                        <p>+ 61 (2) 8093 3402 <br/>+ 61 (2) 8093 3402</p>
                    </div>
                    <hr />

                    <div className="form-control">
                        <h2>Weekly Open</h2>
                        <p>Monday to Friday 9am - 7pm</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;