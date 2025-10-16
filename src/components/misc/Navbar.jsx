/**
 * Tabs to add? Services, Why Choose Us, 
 * Timeline of Process: Step 1 consultation, step 2 planning, step 3 build, step 4 completion
 */
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import navbarLogo from '../../assets/G&R Constructors, In.png';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    return (<>
        <nav id="nav">
            <Link to="/">
                <img
                    src={navbarLogo}
                    alt="G&R Logo"
                />
            </Link>

            <ul>
                <li>
                    <NavLink to="/notfound" viewTransition>Services</NavLink>
                </li>
                <li>
                    <NavLink to="/projects" viewTransition>Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/about-us" viewTransition>About Us</NavLink>
                </li>
                <li>
                    <NavLink className="nav-special" to="/contact-us" viewTransition>Contact Us</NavLink>
                </li>
            </ul>

            <i className="fa-solid fa-bars fa-fw" onClick={() => setSidebar(!sidebar)}></i>

        </nav>
        <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
        </>
    );
}

export default Navbar;