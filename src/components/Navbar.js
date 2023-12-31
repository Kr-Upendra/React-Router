import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#5096ff",
  };

  return (
    <nav className="appContainer">
      <Link className="logo" to="/">
        React Examples
      </Link>
      <div className="right">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/blogs"
        >
          Blogs
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/admin"
        >
          Admin
        </NavLink>
      </div>
    </nav>
  );
}
