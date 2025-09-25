import Navbar from "./Navbar";
import { useEffect, useState } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
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