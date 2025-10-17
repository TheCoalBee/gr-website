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
        <img className="background" src="https://www.bauwise.com/wp-content/uploads/2023/04/AdobeStock_290512663-scaled.webp" alt="" />
        <Hero />

        <ContentSection>
          <ContentBlock 
            alignment="left" 
            wordContent={<ContentText header="Building with Precision" paragraph="At G&R Constructors, we believe that real craftsmanship begins with integrity and ends with results that stand the test of time. Our team delivers commercial carpentry and interior construction with an unwavering focus on safety, precision, and professionalism. Every project - from start to finish - reflects our commitment to honest work, dependable production, and the highest standards of quality. Whether we are in the field or in the office, we do what we say we'll do and we do it right. Because for us, it's more than construction - it's about building trust, one job at a time."/>}
            imageContent={<img src="https://media.istockphoto.com/id/1420678520/photo/building-site-at-sunset.jpg?s=612x612&w=0&k=20&c=HoDUK1RxsH78Fj9D34nao_MUTbf-vR3G97zUWMtES4k="/>}
            theme="light"
          />
          <ContentBlock 
            alignment="right" 
            wordContent={<ContentText header="Trusted Experience, Lasting Results" paragraph="With years of experience in the construction industry, G&R Constructors has earned a reputation for reliability and quality. We combine proven methods with modern innovation to create structures that not only meet today’s needs but also support tomorrow’s growth."/>}
            imageContent={<img src="https://t4.ftcdn.net/jpg/00/68/63/23/360_F_68632352_kmHLwFc2rQLmnKqn6gM0bhOPqxRTx8sY.jpg" />}
            theme="dark"
          />
          <ContentBlock 
            alignment="left" 
            wordContent={<ContentText header="Your Vision, Our Commitment" paragraph="We believe every build begins with a vision. At G&R Constructors, we work closely with clients to turn ideas into reality, ensuring clear communication and dedication at every stage. Your goals become our mission, and your success is the foundation we build upon."/>}
            imageContent={<img src="https://media.istockphoto.com/id/1420678520/photo/building-site-at-sunset.jpg?s=612x612&w=0&k=20&c=HoDUK1RxsH78Fj9D34nao_MUTbf-vR3G97zUWMtES4k="/>}
            theme="light"
          />
        </ContentSection>

        <OurPartners />

        <CallToAction />
    </main>
  );
}

export default Home;