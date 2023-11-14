import { AiOutlineGoogle, AiOutlineTwitter, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer >
            <div className="footer py-28 shadow-2xl flex flex-col lg:flex-row lg:px-14 justify-around items-center">
               <div className='flex flex-col'>
               <div className='flex flex-col lg:text-left lg:items-start'>
                    <img className='w-28' src="https://i.ibb.co/09yDWQS/gv-log.png" alt="" />
                    <p className='mt-5 text-base font-normal w-80'>One of the best services for unique holidays is Green Villa hotel planning. Green Villa tailored to your specific desires take into account your interests, budget and preferred destinations, ensuring that every aspect of your trip is personalized.</p>
                </div>
                <div className='flex text-2xl gap-3 lg:flex-none'>
                    <Link><AiOutlineGoogle></AiOutlineGoogle></Link>
                    <Link><AiOutlineTwitter></AiOutlineTwitter></Link>
                    <Link> <AiFillInstagram></AiFillInstagram></Link>
                    <Link><AiFillLinkedin></AiFillLinkedin></Link>
                </div>
               </div>

               <div className='flex gap-20'>
               <div className='flex flex-col'>
                    <header className="footer-title text-lg font-semibold">Explore</header>
                    <Link to="/about" className="hover:bg-inherit text-base font-normal ">About</Link>
                    <Link to="/rooms" className="hover:bg-inherit text-base font-normal">Rooms</Link>
                    <Link to="/mybookings" className="hover:bg-inherit text-base font-normal ">My Bookings</Link>
                </div>
                <div className='flex flex-col'>
                    <header className="footer-title text-lg font-semibold">Contacts</header>
                    <p className='text-base font-normal'>Los Angeles, CA 90014, United States.</p>
                    <a className="link link-hover text-base font-normal">info@greenvilla.com</a>
                    <a className="link link-hover text-base font-normal">+434 43242232</a>
                </div>
               </div>

                <div>
                    <header className="footer-title text-lg font-semibold">Newsletter</header>
                    <div className="form-control">
                        <label className="input-group">
                            <input type="email" name="email" placeholder="Your Email" className="input input-bordered lg:w-60 lg:h-14" />
                            <button className="btn hover:bg-transparent text-white bg-[#FF3811] border-[#FF3811] hover:border-[#32CD32] hover:text-[#32CD32] text-lg font-semibold normal-case lg:h-14 lg:w-24 mb-3">
                                <input type="submit" value="Subscribe" />
                            </button>
                        </label>
                        <p className='text-base font-normal'>Receive latest offers and promos without spam. <br />You can cancel anytime.</p>
                    </div>
                </div>
            </div>


        </footer>
    );
};

export default Footer;