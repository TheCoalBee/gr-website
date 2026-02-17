
import './styles/projects.css';
import Heading from "./components/misc/Heading";
import CallToAction from "./components/misc/CallToAction";
import ContentBlock from "./components/home/ContentBlock";
import ContentText from "./components/home/ContentText";

function Services({imgUrl}: {imgUrl?: string}) {
    const services = {
        marketSectors: [
            "Hospitality",
            "Civic",
            "K-12",
            "Historic Renovations",
            "Commercial",
            "Interiors",
            "Healthcare/HCAI",
            "Higher Education"
        ],
        services: [
            "Acoustical Ceilings",
            "Acoustical/Tackable Wall Panels",
            "Framing - Wood and Metal",
            "Taping/Drywall",
            "Insulation",
            "Exterior Cladding Systems and Composite Panels",
            "Div 10 Specialities",
            "BIM",
            "Design-Build/Design-Assist",
            "Specialty General Contracting",
        ]
    };

    return (
        <main id="services">
            <img loading="lazy" className="background" src={imgUrl} alt="Services background" />

                <Heading title={"Services"} content={"From concept to completion, every service tells our story of precision, craftsmanship, and commitment. Explore the work that defines G&R Constructors."}/>

                <ContentBlock 
                        alignment="right" 
                       wordContent={<ContentText header="Our Services" paragraph="At G&R Constructors, we deliver a comprehensive range of services tailored to meet the unique needs of each project. Our experienced team ensures quality, safety, and efficiency at every stage. We partner closely with clients, architects, and engineers to bring visions to life (on time and on budget) while upholding the highest standards of craftsmanship and professionalism."/>}
                        imageContent={<img loading="lazy" src="https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?cs=srgb&dl=pexels-asphotography-224924.jpg&fm=jpg"/>}
                        theme="dark"
                    />


                <section className="all-projects">
                    <h1>Services</h1>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '2rem' }}>
                        {services.services.map((service, idx) => (
                            <li key={idx}>{service}</li>
                        ))}
                    </ul>

                    <h1>Market Sectors</h1>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '2rem' }}>
                        {services.marketSectors.map((sector, idx) => (
                            <li key={idx}>{sector}</li>
                        ))}
                    </ul>
                </section>

                {/*<OurPartners />*/}

                <CallToAction />
        </main>
    );
}

export default Services;
