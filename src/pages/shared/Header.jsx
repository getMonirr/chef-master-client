import React from "react";
import { Link, NavLink } from "react-router-dom";
import LoginButton from "../../components/LoginButton";
import { TbChefHat } from "react-icons/tb";
import { Tooltip } from "react-tooltip";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-toastify";

const Header = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        toast.success("logout successful");
      })
      .then((err) => {
        console.log(err);
        toast.error(err?.message);
      });
  };
  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <TbChefHat color={"red"} />
          <span className="text-red-400 mr-2 ml-2">Chef</span>{" "}
          <span className="text-orange-500">Master</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <a className="btn btn-ghost btn-circle avatar mr-4 hidden lg:block">
              <div className="w-10 rounded-full">
                <img
                  className={`${user?.displayName && "show-user-name"}`}
                  src={user?.photoURL || " "}
                />
              </div>
            </a>
            <LoginButton handleClick={handleLogOut}>LogOut</LoginButton>
          </>
        ) : (
          <Link to="/login">
            <LoginButton>Login</LoginButton>
          </Link>
        )}
      </div>
      <Tooltip anchorSelect=".show-user-name" place="left">
        {user?.displayName}
      </Tooltip>
    </div>
  );
};

export default Header;
