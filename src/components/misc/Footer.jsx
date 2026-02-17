import { NavLink, Link } from "react-router-dom";

function Footer() {
	return (
		<footer id="footer">
			   <section style={{ width: '100%', textAlign: 'center', marginBottom: '2rem', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>
			   G&R Constructors, Inc. is proudly signatory to the carpenters, laborers, plasterers, and taper unions.
			   </section>
			<section id="footer-grid">
				   <div>
					   <ul>
						   <h2>NAVIGATION</h2>
						   <li>
							   <NavLink to="/">Home</NavLink>
						   </li>
						   <li>
							   <NavLink to="/services">Services</NavLink>
						   </li>
						   <li>
							   <NavLink to="/projects">Projects</NavLink>
						   </li>
						   <li>
							   <NavLink to="/about-us">About Us</NavLink>
						   </li>
						   <li>
							   <NavLink to="/contact-us">Contact Us</NavLink>
						   </li>
					   </ul>
				   </div>

				   <div>
					   <ul>
						   <h2>CLASSIFICATIONS</h2>
						   <li><a href="https://www.cslb.ca.gov/About_Us/Library/Licensing_Classifications/Licensing_Classifications_Detail.aspx?Class=C-8" target="_blank" rel="noopener noreferrer">C-8 - Concrete</a></li>
						   <li><a href="https://www.cslb.ca.gov/About_Us/Library/Licensing_Classifications/Licensing_Classifications_Detail.aspx?Class=B" target="_blank" rel="noopener noreferrer">B - General Building</a></li>
						   <li><a href="https://www.cslb.ca.gov/About_Us/Library/Licensing_Classifications/Licensing_Classifications_Detail.aspx?Class=C-2" target="_blank" rel="noopener noreferrer">C-2 - Insulation and Acoustical</a></li>
						   <li><a href="https://www.cslb.ca.gov/About_Us/Library/Licensing_Classifications/Licensing_Classifications_Detail.aspx?Class=C-9" target="_blank" rel="noopener noreferrer">C-9 - Drywall</a></li>
					   </ul>
				   </div>

				{/*<div>
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
				</div>*/}

				<div>
					<ul>
						<h2>CONTACT</h2>
						<li>(951) 440 - 6119</li>
						<li>32147 Dunlap Blvd # B <br />Yucaipa, CA 92399</li>
						{/*<li>CA License #XXXXXXX</li>*/}
					</ul>
				</div>
			</section>

			<section id="footer-legal">
				<Link to="/">
					<img loading="lazy" src={'G&R Constructors, Inc_Option-01.png'} alt="" />
				</Link>

				<p>© 2025 G&R Constructors. All rights reserved.</p>
			</section>
			
		</footer>
	);
}

export default Footer;