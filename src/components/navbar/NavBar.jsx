import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo-name">
        <h4>
          <NavLink to="/" end className="navbar-menu-link">RollyDev.</NavLink>
        </h4>
      </div>

      {/* Navigation Menu */}
      <ul className="navbar-menu">
        <li>
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => isActive ? "navbar-menu-link nav-text-color-white navbar-active" : "navbar-menu-link nav-text-color-white"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/services" 
            className={({ isActive }) => isActive ? "navbar-menu-link nav-text-color-white navbar-active" : "navbar-menu-link nav-text-color-white"}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/resume" 
            className={({ isActive }) => isActive ? "navbar-menu-link nav-text-color-white navbar-active" : "navbar-menu-link nav-text-color-white"}
          >
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/work" 
            className={({ isActive }) => isActive ? "navbar-menu-link nav-text-color-white navbar-active" : "navbar-menu-link nav-text-color-white"}
          >
            Work
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? "navbar-menu-link nav-text-color-white navbar-active" : "navbar-menu-link nav-text-color-white"}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
