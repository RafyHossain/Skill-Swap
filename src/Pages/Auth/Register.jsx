import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthProvider';


const Register = () => {
  const navigate=useNavigate();
  const { createUser, setUser } = useContext(AuthContext);
    const handleRegister=(event)=>{
        event.preventDefault();
       const name= event.target.name.value;
       const email=event.target.email.value;
       const photo=event.target.photoURL.value;
       const password=event.target.password.value;

       console.log({name,email,photo,password})
       createUser(email,password)
       .then(result=>{
        const user=result.user;
        console.log(user);
        setUser(user);
        alert("Registration Successfull")
        navigate("/");
       })
       .catch(error=>{
        console.log(error);
        
       })

    }
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
            <label className="label">Photo URL</label>
            <input
              name="photoURL"
              type="text"
              className="input"
              placeholder="Photo URL"
              required
            />

            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />

            <button to="/" type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
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
    )
};

export default Register;