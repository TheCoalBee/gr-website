import { Link } from "react-router-dom";

function Hero() {
  return (
    <section id="hero">
        <h1>Building Modern Spaces with Precision & Care</h1>
        <p>From design to construction, we deliver quality results for homes and businesses.</p>
        <Link to="/contact-us"><button>Get a Free Quote</button></Link>
    </section>
  );
}

export default Hero;