import { Outlet } from "react-router-dom";
import Navbar from "../Pages/SharePage/Navbar";
import Footer from "../Pages/SharePage/Footer";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Main;