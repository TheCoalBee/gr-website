import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
import Projects from "./Projects";
import NotFound from "./NotFound";

export default function App() {
  return (
    <BrowserRouter basename="/gr-website">
        <ScrollToTop />
        
        <Header />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects imgUrl={"https://media.istockphoto.com/id/479842074/photo/empty-road-at-building-exterior.jpg?s=612x612&w=0&k=20&c=SbyfZGN0i2O_QPLCdBcu9vhuzbQvTz4bGEn-lIzrN0E="}/>} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/about-us" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
    </BrowserRouter>
  );
}