import { NavLink } from "react-router-dom";

function CallToAction() {
    return (
        <section id="call-to-action">
            <h1>Let’s Build Something Together</h1>
            
                <NavLink to="/contact-us">Get a free quote</NavLink>
        </section>
    );
}

export default CallToAction;