
import './styles/projects.css';
import Heading from "./components/misc/Heading";
import Project from "./components/projects/Project";
import CallToAction from "./components/misc/CallToAction";
import OurPartners from './components/misc/OurPartners';
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
            "Healthcare/OSHPD",
            "Higher Education"
        ],
        services: [
            "Scaffolding",
            "Acoustical Ceilings",
            "Metal Stud Framing",
            "Insulation",
            "Design-Build/Design-Assist",
            "Drywall",
            "Specialty General Contracting",
            "BIM",
            "Rough Carpentry",
            "Rainscreen and Exterior Cladding Systems"
        ]
    };

    return (
        <main id="projects">
                <img loading="lazy" className="background" src="https://t4.ftcdn.net/jpg/00/68/63/23/360_F_68632352_kmHLwFc2rQLmnKqn6gM0bhOPqxRTx8sY.jpg" alt="Services background" />

                <Heading title={"Services"} content={"From concept to completion, every service tells our story of precision, craftsmanship, and commitment. Explore the work that defines G&R Constructors."}/>

                <ContentBlock 
                        alignment="right" 
                       wordContent={<ContentText header="Our Services" paragraph="At G&R Constructors, we deliver a comprehensive range of services tailored to meet the unique needs of each project. Our experienced team ensures quality, safety, and efficiency at every stage. We partner closely with clients, architects, and engineers to bring visions to life (on time and on budget) while upholding the highest standards of craftsmanship and professionalism."/>}
                        imageContent={<img loading="lazy" src="https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?cs=srgb&dl=pexels-asphotography-224924.jpg&fm=jpg"/>}
                        theme="dark"
                    />


                <section className="all-projects">
                    <h1>Market Sectors</h1>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '2rem' }}>
                        {services.marketSectors.map((sector, idx) => (
                            <li key={idx}>{sector}</li>
                        ))}
                    </ul>
                    <h1>Services</h1>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '2rem' }}>
                        {services.services.map((service, idx) => (
                            <li key={idx}>{service}</li>
                        ))}
                    </ul>
                </section>

                {/*<OurPartners />*/}

                <CallToAction />
        </main>
    );
}

export default Services;
