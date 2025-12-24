import React, { use, useState } from "react";
import { Link,  useLocation,  useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthProvider";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import Swal from "sweetalert2";

const Login = () => {
  const location=useLocation();
  console.log(location)

  const [showPassword, setShowPassword] = useState(false);
  
  const navigate = useNavigate();
  const { setUser, logIn, googleLogIn } = use(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    logIn(email, password)
      .then((result) => {
        const user = result.user;
         setUser(user);
        navigate(`${location.state ? location.state : "/"}`);
        
        //alert("Login Successful");
         Swal.fire({
          title: "Login Successful!",
          icon: "success",
          draggable: true,
        });
       // navigate("/");
        

        //console.log(user);
      })
      .catch((error) => { 
        console.log(error.message)
         Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid mail or credential",
          
        });
      });

      event.target.reset();
  };
  const handleGoogleLogin = () => {
    googleLogIn()
      .then((result) => {
        const user = result.user;
         Swal.fire({
          title: "Login Successful!",
          icon: "success",
          draggable: true,
        });
       // console.log(user);
        setUser(user);
        //alert("Login Successfull");
         navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error.message);
          Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something Error",
          
        });
        

      }); 

      
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center ">
          Login Your Account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            <div>
              <label className="label">Password</label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="input"
                placeholder="Password"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-12 top-5/13 -translate-y-1/2 cursor-pointer "
              >
                {showPassword ? (
                  <IoIosEyeOff size={20} />
                ) : (
                  <IoMdEye size={20} />
                )}
              </span>
            </div>
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <p className="font-semibold text-center py-2 text-xl ">or</p>
            <button
              to="/"
              onClick={handleGoogleLogin}
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </fieldset>
          <p className="text-center pt-5">
            Don't have an Account? Please{" "}
            <Link className="text-blue-500 underline " to="/auth/register">
              {" "}
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
