import { Link } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {

    const menu =
        <>
            <li><Link to="/" className="hover:bg-inherit ">Home</Link></li>
            <li><Link to="/about" className="hover:bg-inherit ">About</Link></li>
            <li><Link to="/rooms" className="hover:bg-inherit ">Rooms</Link></li>
            <li><Link to="/mybookings" className="hover:bg-inherit ">My Bookings</Link></li>


        </>

    return (
        <div className="navbar bg-base-100 sticky top-0 z-10 lg:px-20">
            <div className="dropdown">
                <div>
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-white rounded-box w-52 text-lg font-semibold">
                        {menu}
                    </ul>
                </div>
            </div>
            <div className="flex-1">
                <Link to="/" className="text-xl">
                    <img className='w-44 ml-10 md:ml-56 lg:ml-0' src="https://i.ibb.co/09yDWQS/gv-log.png" alt="" />
                </Link>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-lg font-semibold">
                        {menu}
                    </ul>
                </div>
            </div>

            <div className="flex-none gap-2">

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="text-4xl">
                            <FaUserCircle></FaUserCircle>
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;