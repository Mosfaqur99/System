import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onLogout }) => {
  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <Link to="/update">Update</Link>
      <Link to="/add-products">Add Products</Link>
      <Link to="/logout" onClick={onLogout}>
        Logout
      </Link>
    </nav>
  );
};

export default Navbar;
