import { NavLink, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import sidebarLogo from '../assets/G&R Constructors, Inc_Option-01-blue-white.png';

function Sidebar({sidebar, setSidebar}) {
    const sidebarRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebar && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setSidebar(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [sidebar, setSidebar]);

    return (
        <>
        <div className={`sidebar-background ${sidebar ? "sidebar-background-active" : ""}`}></div>
        <nav id="sidebar" ref={sidebarRef} className={`sidebar ${sidebar ? "sidebar-active" : ""}`}>
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
        </>
    );
}

export default Sidebar;