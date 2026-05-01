import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between">
      <Link to="/dashboard">
        <h1>Dashboard</h1>
      </Link>
      <Link to='create'>Create</Link>
    </div>
  );
};

export default Header;
