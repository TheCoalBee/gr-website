import Navbar from "../misc/Navbar";
import { useEffect, useState } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const threshold = window.innerHeight * 0.05;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
    className={`${
        scrolled ? "header-color" : "header-transparent"
      }`}
      id="header">
        <Navbar />
    </header>
  );
}

export default Header;