import { Link } from "react-router-dom";

function Hero() {
  return (
    <section id="hero">
        <h1>Building Modern Spaces with Precision & Care</h1>
        <Link to="/contact-us"><button>Get a Free Quote</button></Link>
    </section>
  );
}

export default Hero;