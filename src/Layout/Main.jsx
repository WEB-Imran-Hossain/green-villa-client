import { Outlet } from "react-router-dom";
import Navbar from "../Pages/SharePage/Navbar";
import Footer from "../Pages/SharePage/Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;