import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="mb-5 text-white bg-violet-900 p-5">
        <ul
          className="list-none flex justify-between ml-5 mr-5" 
        >
          <li onClick={() => navigate("/")} className="cursor-pointer">Contact Manager</li>
          <li>Profile</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
