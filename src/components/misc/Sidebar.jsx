import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";

function Sidebar({sidebar, setSidebar}) {
    const sidebarRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebar && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setSidebar(false);
            }
        }

        document.body.style.overflow = sidebar ? "hidden" : "";

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = "";
        };
    }, [sidebar, setSidebar]);

    return (
        <>
        <div className={`sidebar-background ${sidebar ? "sidebar-background-active" : ""}`}></div>
        <nav id="sidebar" ref={sidebarRef} className={`sidebar ${sidebar ? "sidebar-active" : ""}`}>
            <i className="fa-solid fa-xmark fa-fw" onClick={() => setSidebar(!sidebar)}></i>

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