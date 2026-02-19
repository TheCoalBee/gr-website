
import './styles/projects.css';
import Heading from "./components/misc/Heading";
import CallToAction from "./components/misc/CallToAction";
import ContentBlock from "./components/home/ContentBlock";
import ContentText from "./components/home/ContentText";
import ImageCarousel from './components/projects/ImageCarousel';

import { useEffect } from 'react';

function Services({imgUrl}) {
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
            { name: "Acoustical Ceilings", image: "services-images/acoustical-ceilings.png" },
            { name: "Acoustical/Tackable Wall Panels", image: "services-images/acoustical-tackable-wall-panels.png" },
            { name: "Framing - Wood and Metal", image: "services-images/framing-wood-metal.png" },
            { name: "Taping/Drywall", image: "services-images/taping-drywall.png" },
            { name: "Insulation", image: "services-images/insulation.png" },
            { name: "Exterior Cladding Systems and Composite Panels", image: "services-images/exterior-cladding-systems-1.png" },
            { name: "Div 10 Specialities" },
            { name: "BIM" },
            { name: "Design-Build/Design-Assist" },
            { name: "Specialty General Contracting" },
        ]
    };

    // Preload carousel images
    useEffect(() => {
        const imagesToPreload = services.services
            .filter(service => !!service.image)
            .map(service => service.image);
        imagesToPreload.forEach(src => {
            const img = new window.Image();
            img.src = src;
        });
    }, []);

    return (
        <main id="services">
            <img loading="lazy" className="background" src={imgUrl} alt="Services background" />

                <Heading title={"Services"} content={"From concept to completion, every service tells our story of precision, craftsmanship, and commitment. Explore the work that defines G&R Constructors."}/>

                <ContentBlock 
                        alignment="right" 
                       wordContent={<ContentText header="Our Services" paragraph="At G&R Constructors, we deliver a comprehensive range of services tailored to meet the unique needs of each project. Our experienced team ensures quality, safety, and efficiency at every stage. We partner closely with clients, architects, and engineers to bring visions to life (on time and on budget) while upholding the highest standards of craftsmanship and professionalism."/>}
                        imageContent={
                            <ImageCarousel
                                images={services.services
                                    .filter(service => !!service.image)
                                    .map(service => service.image)
                                }
                                aspectRatio="16/9"
                                showIndicators={true}
                                showArrows={true}
                            />
                        }
                        theme="dark"
                    />


                <section className="all-projects">
                    <h1>Services</h1>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '2rem' }}>
                        {services.services.map((service, idx) => (
                            <li key={idx}>
                                {service.name}
                            </li>
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
