import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const userLocation = useLocation();
    const userNavigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
           
              toast("Logout Successfully!!", {
                position: "top-center",
              });
              userNavigate(userLocation.state ? userLocation.state : "/");
          
      })
      .catch((error) => console.error(error));
  };

  const menu = (
    <>
      <li>
        <Link to="/" className="hover:bg-inherit ">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="hover:bg-inherit ">
          About
        </Link>
      </li>
      <li>
        <Link to="/rooms" className="hover:bg-inherit ">
          Rooms
        </Link>
      </li>
      <li>
        <Link to="/contact" className="hover:bg-inherit ">
          Contact
        </Link>
      </li>
      <li>
        <Link to="/reviws" className="hover:bg-inherit ">
        Testimonials
        </Link>
      </li>
      <li>
        <Link to="/mybookings" className="hover:bg-inherit ">
          My Bookings
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 sticky top-0 z-10 flex justify-around items-center shadow-2xl">
      <div className="dropdown">
        <div className="navbar-center">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-4 z-[1] shadow bg-white rounded-box w-52 text-lg font-semibold rounded-none"
          >
            {menu}
          </ul>
        </div>
        <div className="hidden lg:block">
          <Link to="/" className="text-xl">
            <img
              className="w-28"
              src="https://i.ibb.co/09yDWQS/gv-log.png"
              alt=""
            />
          </Link>
        </div>
      </div>
      <div>
        <div className="lg:hidden">
          <Link to="/" className="text-xl">
            <img
              className="w-28"
              src="https://i.ibb.co/09yDWQS/gv-log.png"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-lg font-semibold">{menu}</ul>
        </div>
      </div>

      <div>
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="text-4xl rounded-full">
                <img src={user.photoURL} alt="User_Profile" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-4 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-lg font-semibold rounded-none"
            >
              <li>
                <a className="justify-between">{user.displayName}</a>
              </li>
              <li onClick={handleLogOut}>
                <Link>Logout</Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <div className="text-4xl dropdown dropdown-end">
              <FaUserCircle></FaUserCircle>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
