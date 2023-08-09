import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function AdminLayout() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#5096ff",
  };

  return (
    <>
      <nav className="adnav">
        <NavLink
          to="/admin"
          end
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/admin/addblog"
        >
          Add Blog
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/admin/getStats"
        >
          Get Stats
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
