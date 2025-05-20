import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
    <div className='navbar-logo-name'>
        <h4><Link to="/">RollyDev.</Link></h4>
    </div>

    <div>
        <ul className="navbar-menu">
            <li>
                <Link to="/" className="navbar-menu-link nav-text-color-white " >Home</Link>
            </li>
            <li>
                <Link className="navbar-menu-link nav-text-color-white" to="services">Services</Link>
            </li>
            <li>
                <Link className="navbar-menu-link nav-text-color-white" to="resume">Resume</Link>
            </li>
            <li>
                <Link className="navbar-menu-link nav-text-color-white" to="work">Work</Link>
            </li>
            <li>
                <Link className="navbar-menu-link nav-text-color-white" to="contact">Contact</Link>
            </li>
        </ul>
    </div>
    </>
)
}

export default NavBar
