import { NavLink, Link } from "react-router-dom";
import footerLogo from '../assets/G&R Constructors, Inc_Option-01.png';

function Footer() {
	return (
		<footer id="footer">
			<section id="footer-grid">
				<div>
					<ul>
						<h2>NAVIGATION</h2>
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/projects">Projects</NavLink>
						</li>
						<li>
							<NavLink to="/contact-us">Contact Us</NavLink>
						</li>
						<li>
							<NavLink to="/about-us">About Us</NavLink>
						</li>
					</ul>
				</div>

				<div>
					<ul>
						<h2>LEGAL</h2>
						<li>
							<NavLink to="*">General Info</NavLink>
						</li>
						<li>
							<NavLink to="*">Privacy Policy</NavLink>
						</li>
						<li>
							<NavLink to="*">Terms of Service</NavLink>
						</li>
					</ul>
				</div>

				<div>
					<ul>
						<h2>CONTACT</h2>
						<li>XXX-XXX-XXXX</li>
						<li>XXXXX Address Blvd # A <br />City, ST</li>
						<li>CA License #XXXXXXX</li>
					</ul>
				</div>
			</section>

			<section id="footer-legal">
				<Link to="/">
					<img src={footerLogo} alt="" />
				</Link>

				<p>© 2025 G&R Constructors. All rights reserved.</p>
			</section>
			
		</footer>
	);
}

export default Footer;