import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <h1>
        𝓪𝓲𝓮𝓼<span> 𝓽𝓱𝓮 𝓬𝓻𝓮𝓪𝓽𝓸𝓻</span>
      </h1>
      <p className="nav-list">
        <Link to="/">home</Link>
      </p>
      <p className="nav-list">
        <Link to="/hero">about me</Link>
      </p>
      <p className="nav-list">
        <Link to="/follow">follow me</Link>
      </p>
    </div>
  );
}

export default Navbar;
