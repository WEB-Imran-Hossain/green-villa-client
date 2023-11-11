import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const userLocation = useLocation();
    // console.log(location);

    if (loading) {
        return <span className="loading loading-spinner loading-lg bg-[#FF3811]"></span>
    }

    if (user) {
        return children;

    }else{
        return <Navigate state={userLocation.pathname} to="/login" replace></Navigate>
    }
    
};

export default PrivateRoutes;