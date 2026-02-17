import { NavLink } from "react-router-dom";

function CallToAction() {
    return (
        <section id="call-to-action">
            <h1>Quality. Precision. Results.</h1>
            <p>Start your build with us today.</p>
            
            <NavLink to="/contact-us">Contact Us</NavLink>
        </section>
    );
}

export default CallToAction;