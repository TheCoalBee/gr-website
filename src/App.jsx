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
    // Comprehensive image preloading to prevent grey screen while loading
    const imagesToPreload = [
      // Logo
      "G&R Constructors, Inc_Option-01.png",
      
      // Home page
      "home-background.png",
      "home-block-1.png",
      "home-block-2.png",
      "home-block-3.png",
      
      // Projects page
      "projects-background.png",
      "Archibald Library.png",
      "Granger JHS Building.png",
      
      // About page
      "about-background.png",
      "about-us-block-1.png",
      "about-us-block-2.png",
      
      // Services page
      "services-background.png",
      "services-images/acoustical-ceilings.png",
      "services-images/acoustical-tackable-wall-panels.png",
      "services-images/framing-wood-metal.png",
      "services-images/taping-drywall.png",
      "services-images/insulation.png",
      "services-images/exterior-cladding-systems-1.png",
      
      // Team member photos
      "EBP5769Antz.jpg",
      "EBP5645Antz.jpg",
      "EBP5705Antz.jpg",
      "winegardner-5495.png",
      "winegardner-5593.jpg",
      
      // Auto-images (optimized versions)
      "/auto-images/home-bg.webp",
      "/auto-images/projects-bg.jpg",
      "/auto-images/contact-bg.jpg",
      "/auto-images/about-bg.jpg",
      "/auto-images/notfound-bg.jpg",
      "Favicon-01.ico",
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
