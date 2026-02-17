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
      <div className="background-container">
        <img loading="lazy" className="background" src="public/home-background.png" alt="" />
      </div>
      <Hero />

        <ContentSection>
          <ContentBlock 
            alignment="left" 
            wordContent={<ContentText header="Building with Precision" paragraph="At G&R Constructors, integrity isn't a slogan, it's how we work. We show up, we're honest, and we keep our word. Our crew takes pride in commercial carpentry done safely and done right, with solid production that drives the projects and maintains schedules."/>}
            imageContent={<img loading="lazy" src="public/home-block-1.png"/>}
            theme="light"
          />
          <ContentBlock 
            alignment="right" 
            wordContent={<ContentText header="Trusted Experience, Lasting Results" paragraph="We take care of our people and take pride in the craftsmanship we bring to every project. We stay focused, communicate openly, and put in the kind of steady, reliable work that earns respect on and off the jobsite. Because for us, it's simple: when you work with integrity, focus on safety, and deliver consistent results, trust follows — and that's what we aim to build on every project."/>}
            imageContent={<img loading="lazy" src="public/home-block-2.png" />}
            theme="dark"
          />
          <ContentBlock 
            alignment="left" 
            wordContent={<ContentText header="Your Vision, Our Commitment" paragraph="We believe every build begins with a vision. At G&R Constructors, we work closely with clients to turn ideas into reality, ensuring clear communication and dedication at every stage. Your goals become our mission, and your success is the foundation we build upon."/>}
            imageContent={<img loading="lazy" src="public/home-block-3.png"/>}
            theme="light"
          />
        </ContentSection>

        {/*<OurPartners />*/}

        <CallToAction />
    </main>
  );
}

export default Home;