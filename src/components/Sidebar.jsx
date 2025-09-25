import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import sidebarLogo from '../assets/G&R Constructors, Inc_Option-01-blue-white.png';

function Sidebar({sidebar, setSidebar}) {
    return (
        <nav id="sidebar" className={`sidebar ${sidebar ? "sidebar-active" : ""}`}>
            <div>
                <Link to="/">
                    <img
                        src={sidebarLogo}
                        alt="G&R Logo"
                        onClick={() => setSidebar(!sidebar)}
                    />
                </Link>
                <i className="fa-solid fa-xmark" onClick={() => setSidebar(!sidebar)}></i>
            </div>

            <ul>
                <li>
                    <NavLink onClick={() => setSidebar(!sidebar)} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink onClick={() => setSidebar(!sidebar)} to="/projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink onClick={() => setSidebar(!sidebar)} to="/contact-us">Contact Us</NavLink>
                </li>
                <li>
                    <NavLink onClick={() => setSidebar(!sidebar)} to="/about-us">About Us</NavLink>
                </li>
            </ul>
            
        </nav>
    );
}

export default Sidebar;