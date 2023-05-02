import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginButton = ({children,handleClick}) => {
  return (
    <Link to="/login">
      <button onClick={handleClick} className="bg-white border-0 capitalize btn gap-2 text-orange-400 shadow-orange-300 shadow-md">
        <FaUserAlt />
        {children}
      </button>
    </Link>
  );
};

export default LoginButton;
