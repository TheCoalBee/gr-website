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
        <Hero />

        <ContentSection>
          <ContentBlock 
            alignment="left" 
            wordContent={<ContentText header="Built to Last..." paragraph="Winegardner has been serving Southern and Central California since 1977. At Winegardner, we believe that investing in people is the key to our success. Our people are not only great at what they do but also great people to work with. They are friendly, approachable, and always willing to go the extra mile to ensure customer satisfaction. We believe that building strong relationships with our clients is essential to our long-term success, and our people are at the heart of those relationships."/>}
            imageContent={<img src="https://media.istockphoto.com/id/1420678520/photo/building-site-at-sunset.jpg?s=612x612&w=0&k=20&c=HoDUK1RxsH78Fj9D34nao_MUTbf-vR3G97zUWMtES4k=" />}
          />
          <ContentBlock 
            alignment="right" 
            wordContent={<ContentText header="Built to Last..." paragraph="Winegardner has been serving Southern and Central California since 1977. At Winegardner, we believe that investing in people is the key to our success. Our people are not only great at what they do but also great people to work with. They are friendly, approachable, and always willing to go the extra mile to ensure customer satisfaction. We believe that building strong relationships with our clients is essential to our long-term success, and our people are at the heart of those relationships."/>}
            imageContent={<img src="https://t4.ftcdn.net/jpg/00/68/63/23/360_F_68632352_kmHLwFc2rQLmnKqn6gM0bhOPqxRTx8sY.jpg" />}
          />
        </ContentSection>

        <CallToAction />
    </main>
  );
}

export default Home;