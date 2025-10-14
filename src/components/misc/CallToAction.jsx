import { NavLink } from "react-router-dom";

function CallToAction() {
    return (
        <section id="call-to-action">
            <h1>Quality. Precision. Results.</h1>
            <p>Start your build with us today.</p>
            
            <NavLink to="/contact-us">Get a free quote</NavLink>
        </section>
    );
}

export default CallToAction;