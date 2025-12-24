import React, { useContext, useState } from "react";
import { Link,  useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthProvider";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import Swal from "sweetalert2";

const Register = () => {
  
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { createUser, setUser, updateUser } = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const photo = event.target.photoURL.value;
    const password = event.target.password.value;

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }

    setError("");

    console.log({ name, email, photo, password });
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        //console.log(user);
        //setUser(user);
        updateUser({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            
          })
          .catch((error) => {
            //console.log(error);
            setUser(user);
          });
       // alert("Registration Successfull");
      
        Swal.fire({
          title: "Thank You For Registration!",
          icon: "success",
          draggable: true,
        });
        navigate("/");
          
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
        
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center ">
          Register Your Account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />

            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label">Photo URL (optional)</label>
            <input
              name="photoURL"
              type="text"
              className="input"
              placeholder="Photo URL"
            />

            <div className="relative">
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
                className="absolute right-6 top-5/8 -translate-y-1/2 cursor-pointer "
              >
                {showPassword ? <IoIosEyeOff size={20}/> : <IoMdEye size={20} />}
              </span>
            </div>
            <button  type="submit"  className="btn btn-neutral mt-4">
              Register
            </button>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </fieldset>
          <p className="text-center pt-5">
            Already have an Account? Please{" "}
            <Link className="text-blue-500 underline " to="/auth/login">
              {" "}
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
