import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear("user");
    navigate("/login");
  };

  return (
    <div className="w-full py-5 sticky top-0 left-0  bg-slate-500 px-20 flex justify-between items-center">
      <div className="left">
        <div className="logo">
          <h1 className="text-2xl font-extrabold text-orange-400">E-cart</h1>
        </div>
      </div>
      <div className="right">
        <div className="link flex gap-5 items-center ">
          <Link className="hover:text-orange-500" to={"/"}>
            Home
          </Link>

          {user ? (
            <>
              <Link className="hover:text-orange-500" to={"/about"}>
                About
              </Link>
              <Link>
                <button
                  onClick={logout}
                  type="button"
                  className="text-gray-900 hover:text-white border border-orange-700 hover:bg-orange-900 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                >
                  logout
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to={"/register"}>
                <button
                  type="button"
                  className="text-gray-900 hover:text-white border border-orange-700 hover:bg-orange-900 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                >
                  register
                </button>
              </Link>
              <Link to={"/login"}>
                {" "}
                <button
                  type="button"
                  className="text-gray-900 hover:text-white border border-orange-700 hover:bg-orange-900 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2  "
                >
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
