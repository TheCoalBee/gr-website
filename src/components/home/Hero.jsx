import { Link } from "react-router-dom";

function Hero() {
  return (
    <section id="hero">
      <h1>Your Vision. Our Build.</h1>
        <Link to="/contact-us"><button>Get a Free Quote</button></Link>
    </section>
  );
}

export default Hero;