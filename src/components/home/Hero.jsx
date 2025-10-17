import { Link } from "react-router-dom";

function Hero() {
  return (
    <section id="hero">
      <h1>Built on <span>Integrity</span> <br /> Driven by <span>Quality</span></h1>
        <Link to="/contact-us"><button>Get a Free Quote</button></Link>
    </section>
  );
}

export default Hero;