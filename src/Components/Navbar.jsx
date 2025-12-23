import React, { use } from "react";
import logo from "../assets/logo.png";

import { Link } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("Logged out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm w-screen mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">My Profile</Link>
            </li>
          </ul>
        </div>

        <img
          className="w-[80px] h-[50px] mr-5 rounded-full"
          src={logo}
          alt="Logo"
        />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">My Profile</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-4 mr-5">
        {user && (
          <>
           

            <div
              className="tooltip tooltip-left"
              data-tip={user?.displayName || "User"}
            >
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt=""
                  className="w-12 h-12 rounded-full object-cover border cursor-pointer"
                />
              ) : (
                <div className="w-12 h-12 rounded-full border flex items-center justify-center cursor-pointer">
                  <FaUser className="text-xl" />
                </div>
              )}
            </div>

            
            <button
              onClick={handleLogOut}
              className="btn btn-primary rounded-xl px-6"
            >
              Log Out
            </button>
          </>
        )}

        {!user && (
          <>
            <Link to="/auth/login" className="btn btn-primary rounded-xl px-5">
              Login
            </Link>
            <Link
              to="/auth/register"
              className="btn btn-primary rounded-xl ml-3"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
