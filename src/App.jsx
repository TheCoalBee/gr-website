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
  return (
    <BrowserRouter basename="/">
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects imgUrl="/auto-images/projects-bg.jpg" />} />
        <Route path="services" element={<Services />} />
        <Route path="contact-us" element={<Contact imgUrl="/auto-images/contact-bg.jpg" />} />
        <Route path="about-us" element={<About imgUrl="/auto-images/about-bg.jpg" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
