import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    // Breakpoint for showing hamburger (matches CSS, e.g. 900px)
    useEffect(() => {
        function handleResize() {
            // If window is wide enough for desktop nav, close sidebar
            if (window.innerWidth > 900 && sidebar) {
                setSidebar(false);
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [sidebar]);

    return (<>
        <nav id="nav">
            <Link to="/">
                <img loading="lazy"
                    src={"G&R Constructors, Inc_Option-01.png"}
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