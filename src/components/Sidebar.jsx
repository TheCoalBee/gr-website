import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Sidebar({sidebar, setSidebar}) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav id="sidebar" className={`sidebar ${!sidebar ? "sidebar-active" : ""}`}>
            <div>
            <Link to="/">
                <img
                    src="src/assets/G&R Constructors, Inc_Option-01-blue-white.png"
                    alt="G&R Logo"
                />
            </Link>
            <i className="fa-solid fa-xmark" onClick={() => setSidebar(!sidebar)}></i>
            </div>

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

            

            
        </nav>
    );
}

export default Sidebar;