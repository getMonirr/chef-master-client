import React from "react";
import { FaUserAlt } from "react-icons/fa";

const LoginButton = () => {
  return (
    <button className="bg-white border-0 capitalize btn gap-2 text-orange-400 shadow-orange-300 shadow-md">
      <FaUserAlt/>
      Login
    </button>
  );
};

export default LoginButton;
