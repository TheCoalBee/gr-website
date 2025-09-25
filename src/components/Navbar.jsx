/**
 * Tabs to add? Services, Why Choose Us, 
 * Timeline of Process: Step 1 consultation, step 2 planning, step 3 build, step 4 completion
 */

import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [sidebar, setSidebar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav id="nav">
            <Link to="/">
                <img
                    src="src/assets/G&R Constructors, Inc_Option-01-blue-white.png"
                    alt="G&R Logo"
                />
            </Link>

            <ul>
                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/contact-us">Contact Us</NavLink>
                </li>
                <li>
                    <NavLink to="/about-us">About Us</NavLink>
                </li>
            </ul>

            <i className="fa-solid fa-bars" onClick={() => setSidebar(!sidebar)}></i>

            <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>

        </nav>
    );
}

export default Navbar;