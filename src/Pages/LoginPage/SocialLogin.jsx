import { useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";

const provider = new GoogleAuthProvider();

const SocialLogin = () => {
    const userLocation = useLocation();
    const userNavigate = useNavigate();

    // google button handle
    const handleSocialLogin = () => {
        signInWithPopup(auth, provider).then(res => {
            const currentUser = res?.user;
            console.log("current user from social login", currentUser);
            if (res.user) {
                toast("User Created/Login Successfully!!", {
                    position: "top-center",
                });
                userNavigate(userLocation.state ? userLocation.state : "/");
            }
        }).catch(error => {
            console.log(error);
        })
    };

    return (
        <>
            <div className="flex items-center justify-center">
                <button
                    onClick={handleSocialLogin}
                    className="border border-[#32CD32] rounded-lg text-base font-bold p-3 flex items-center text-[#32CD32]"
                >
                    <FaGoogle className="mr-2"></FaGoogle>Continue with Google
                </button>
            </div>
        </>
    );
};

export default SocialLogin;
