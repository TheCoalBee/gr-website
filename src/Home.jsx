/**
 * Content to include:
 * Call to action "Book Us for your next project" "Request a free estimate"
 * 3-point highlights
 * Rotating testimonials
 */

import Hero from "./components/home/Hero";
import ContentBlock from "./components/home/ContentBlock";
import ContentText from "./components/home/ContentText";
import ContentSection from "./components/home/ContentSection";
import CallToAction from "./components/misc/CallToAction";
import OurPartners from "./components/misc/OurPartners";

function Home() {
  return (
    <main id="home">
        <img loading="lazy" className="background" src="https://www.bauwise.com/wp-content/uploads/2023/04/AdobeStock_290512663-scaled.webp" alt="" />
        <Hero />

        <ContentSection>
          <ContentBlock 
            alignment="left" 
            wordContent={<ContentText header="Building with Precision" paragraph="At G&R Constructors, integrity isn't a slogan, it's how we work. We show up, we're honest, and we keep our word. Our crew takes pride in commercial carpentry done safely and done right, with solid production that drives the projects and maintains schedules."/>}
            imageContent={<img loading="lazy" src="https://media.istockphoto.com/id/1420678520/photo/building-site-at-sunset.jpg?s=612x612&w=0&k=20&c=HoDUK1RxsH78Fj9D34nao_MUTbf-vR3G97zUWMtES4k="/>}
            theme="light"
          />
          <ContentBlock 
            alignment="right" 
            wordContent={<ContentText header="Trusted Experience, Lasting Results" paragraph="We take care of our people and take pride in the craftsmanship we bring to every project. We stay focused, communicate openly, and put in the kind of steady, reliable work tha earns respect on and off the jobsite. Because for us, it's simple: when you work with integrity, focus on safety, and deliver consistent results, trust follows — and that's what we aim to build on every project."/>}
            imageContent={<img loading="lazy" src="https://t4.ftcdn.net/jpg/00/68/63/23/360_F_68632352_kmHLwFc2rQLmnKqn6gM0bhOPqxRTx8sY.jpg" />}
            theme="dark"
          />
          <ContentBlock 
            alignment="left" 
            wordContent={<ContentText header="Your Vision, Our Commitment" paragraph="We believe every build begins with a vision. At G&R Constructors, we work closely with clients to turn ideas into reality, ensuring clear communication and dedication at every stage. Your goals become our mission, and your success is the foundation we build upon."/>}
            imageContent={<img loading="lazy" src="https://media.istockphoto.com/id/1420678520/photo/building-site-at-sunset.jpg?s=612x612&w=0&k=20&c=HoDUK1RxsH78Fj9D34nao_MUTbf-vR3G97zUWMtES4k="/>}
            theme="light"
          />
        </ContentSection>

        {/*<OurPartners />*/}

        <CallToAction />
    </main>
  );
}

export default Home;