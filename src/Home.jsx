/**
 * Content to include:
 * Call to action "Book Us for your next project" "Request a free estimate"
 * 3-point highlights
 * Rotating testimonials
 */

import Hero from "./components/Hero";
import ContentBlock from "./components/ContentBlock";
import ContentText from "./components/ContentText";
import ContentSection from "./components/ContentSection";
import CallToAction from "./components/CallToAction";

function Home() {
  return (
    <main id="home">
        <img className="background" src="https://www.bauwise.com/wp-content/uploads/2023/04/AdobeStock_290512663-scaled.webp" alt="" />
        <Hero />

        <ContentSection>
          <ContentBlock 
            alignment="left" 
            wordContent={<ContentText header="Building with Precision" paragraph="At G&R Constructors, every project is approached with attention to detail and expert craftsmanship. From foundations to finishing touches, we take pride in delivering work that stands the test of time. Precision isn’t just a promise—it’s our standard."/>}
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

        <CallToAction />
    </main>
  );
}

export default Home;