import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute ">
      <h1 className="text-red-600 font-bold sm:text-4xl text-2xl cursor-pointer">
        <Link to="/">NETFLIX</Link>
      </h1>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white pr-4 cursor-pointer">Account</button>
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-600 rounded cursor-pointer text-white hover:bg-red-800 duration-200 px-2 sm:px-6 py-2 "
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr-4 cursor-pointer">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 rounded cursor-pointer text-white hover:bg-red-800 duration-200 px-2 sm:px-6 py-2 ">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
