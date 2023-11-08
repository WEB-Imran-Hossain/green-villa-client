import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const userLocation = useLocation();
    // console.log(location);

    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    if (user) {
        return children;
    }
    return <Navigate state={userLocation.pathname} to="/login" replace></Navigate>
};

export default PrivateRoutes;