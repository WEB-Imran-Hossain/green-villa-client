import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { toast } from "react-toastify";

const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext);
    console.log(googleLogin);
    const userLocation = useLocation();
    const userNavigate = useNavigate();
    // button handle
    const handleSocialLogin = () => {
        googleLogin()
            .then((res) => {
                console.log(res);
                toast("User Created/Login Successfully!!", { position: "top-center" });
                userNavigate(userLocation.state ? userLocation.state : "/");
            })
            .catch((error) => console.log(error));
    };
    return (
        <>
            <div className='flex items-center justify-center'>
                <button onClick={handleSocialLogin} className="border border-[#32CD32] rounded-lg text-base font-bold p-3 flex items-center text-[#32CD32]"
                >
                    <FaGoogle className="mr-2"></FaGoogle>Continue with Google
                </button>
            </div>
        </>
    );
};

export default SocialLogin;