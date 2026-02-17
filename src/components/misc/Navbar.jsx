import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    return (<>
        <nav id="nav">
            <Link to="/">
                <img loading="lazy"
                    src={"G&R Constructors, In.png"}
                    alt="G&R Logo"
                />
            </Link>

            <ul>
                <li>
                    <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/about-us">About Us</NavLink>
                </li>
                <li>
                    <NavLink className="nav-special" to="/contact-us">Contact Us</NavLink>
                </li>
            </ul>

            <i className="fa-solid fa-bars fa-fw" onClick={() => setSidebar(!sidebar)}></i>

        </nav>
        <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
        </>
    );
}

export default Navbar;