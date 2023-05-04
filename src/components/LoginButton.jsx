import React from "react";
import { FaUserAlt } from "react-icons/fa";

const LoginButton = ({ children, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="bg-white border-0 capitalize btn px-2 lg:px-6 gap-1 lg:gap-2 text-orange-400 shadow-orange-300 shadow-md hover:bg-primary"
    >
      <FaUserAlt />
      {children}
    </button>
  );
};

export default LoginButton;
