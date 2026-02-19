import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/misc/Footer";
import ScrollToTop from "./components/misc/ScrollToTop";
import Header from "./components/misc/Header";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
import Projects from "./Projects";
import Services from "./Services";
import NotFound from "./NotFound";

export default function App() {
  useEffect(() => {
    const imagesToPreload = [
      "/auto-images/projects-bg.jpg",
      "/services-background.jpg",
      "/auto-images/contact-bg.jpg",
      "/auto-images/about-bg.jpg",
    ];

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <BrowserRouter basename="/">
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects imgUrl="projects-background.png" />} />
        <Route path="services" element={<Services imgUrl="services-background.png" />} />
        <Route path="contact-us" element={<Contact imgUrl="home-background.png" />} />
        <Route path="about-us" element={<About imgUrl="about-background.png" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
