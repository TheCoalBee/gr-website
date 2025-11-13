import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/misc/Footer";
import ScrollToTop from "./components/misc/ScrollToTop";
import Header from "./components/misc/Header";
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
            <Route path="/contact-us" element={<Contact imgUrl={"https://www.shutterstock.com/image-photo/stunning-view-new-york-city-600nw-2500167629.jpg"}/>} />
            <Route path="/about-us" element={<About imgUrl={"https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?cs=srgb&dl=pexels-pixabay-302769.jpg&fm=jpg"}/>} />
            <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
    </BrowserRouter>
  );
}