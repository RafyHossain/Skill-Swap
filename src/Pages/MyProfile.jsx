import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { FaUser, FaUserEdit } from "react-icons/fa";
import Swal from "sweetalert2";

const MyProfile = () => {
  const { user, updateUser, setUser } = useContext(AuthContext);

  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  if (!user) {
    return (
      <p className="text-center mt-20 text-lg font-semibold">
        No user data found
      </p>
    );
  }

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    updateUser({
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        // update context user
        setUser({
          ...user,
          displayName: name,
          photoURL: photo,
        });

        Swal.fire({
          icon: "success",
          title: "Profile Updated Successfully!",
          timer: 2000,
          showConfirmButton: false,
        });

        setShowForm(false);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200 px-4">
       
      <div className="card bg-base-100 shadow-xl w-full max-w-md p-6">
         <h2 className="font-bold text-2xl mb-10 text-center">User Information</h2>

        {/* User Image */}
        <div className="flex justify-center">
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt="User"
              className="w-28 h-28 rounded-full object-cover border"
            />
          ) : (
            <div className="w-28 h-28 rounded-full border flex items-center justify-center text-4xl">
              <FaUser></FaUser>
            </div>
          )}
        </div>

        {/* User Info */}
        <div className="text-center mt-4 space-y-2">
          <h2 className="text-2xl font-bold">
            {user.displayName || "No Name"}
          </h2>
          <p className="text-gray-600">{user.email}</p>
        </div>

        {/* Update Button */}
        <div className="mt-6">
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn btn-primary w-full flex items-center gap-2"
          >
            <FaUserEdit />
            Update Profile
          </button>
        </div>

        {/* Update Form */}
        {showForm && (
          <form onSubmit={handleUpdateProfile} className="mt-6 space-y-4">

            <div>
              <label className="label">Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="label">Photo URL</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-success w-full">
              Save Changes
            </button>
          </form>
        )}

      </div>
    </div>
  );
};

export default MyProfile;
