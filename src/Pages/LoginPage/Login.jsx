import { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import SocialLogin from "./SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import {
  sendPasswordResetEmail,
} from "firebase/auth";

const Login = () => {
  const { signIn, user } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const userLocation = useLocation();
  const userNavigate = useNavigate();
  const emailRef = useRef(null);

  const handleLogin = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    // reset error
    setRegisterError("");

    // reset sucess
    setSuccessMessage("");

    event.target.reset();

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        if (user) {
          userNavigate(userLocation.state ? userLocation.state : "/")
        }

        console.log(user);
      })
      .catch(error => console.log(error));
  }

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      console.log("Please provide an email", emailRef.current.value);
      return;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      console.log("Please write a valid email");
      return;
    }
    // send validation email
    sendPasswordResetEmail(email)
      .then(() => {
        toast("Please check your email", { position: "top-center" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="card flex-shrink-0 shadow-2xl bg-base-100 p-5 rounded-none ">

          <div className="card-body">
            <h1 className="text-2xl font-semibold text-black">Welcome Back</h1>
            <p className='text-base font-normal text-[#737373]'>Don't have an account yet? <Link to="/registration"><span className='text-base font-normal text-[#32CD32]'>Registration for free</span></Link></p>

            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input type="email" ref={emailRef} name='email' placeholder="Email" className="input input-bordered" required />

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Confirm Password</span>
                </label>
                <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                <label className="label">
                  <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot your password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className='btn text-white bg-[#FF3811] border-[#FF3811]  hover:border-[#32CD32] hover:text-[#32CD32] text-lg font-semibold rounded-none normal-case hover:bg-transparent ' type="submit" value="Log In" />
              </div>
              <div className='text-center space-y-6'>
                <p className='mt-6 text-base font-normal text-[#737373]'>Or Sign In with</p>
                <SocialLogin></SocialLogin>
                <p className='text-base font-normal text-[#737373]'>By creating an account, you agree to our Terms of Service and Privacy Statement.</p>
              </div>
            </form>
            {registerError && <p className="text-red-600">{registerError}</p>}
            {successMessage && (
              <p className="text-green-600">{successMessage}</p>
            )}
            
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;