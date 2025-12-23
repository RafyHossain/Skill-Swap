import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    const handleLogin=(event)=>{
        event.preventDefault();

    }
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
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Login
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