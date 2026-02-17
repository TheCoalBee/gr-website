/**
 * Mission statement + core values
 * Company story, why company was founded
 * Introduce the team
 * Certifications, insurance, licenses
 */

import "./styles/about.css";
import Heading from "./components/misc/Heading";
import TeamMembers from "./components/about/TeamMembers";
import CallToAction from "./components/misc/CallToAction";
import ContentBlock from "./components/home/ContentBlock";
import ContentText from "./components/home/ContentText"

function About({imgUrl}) {
  let departments = [
    {
      name: "Accounting",
      teamMembers: [
        {
          name: "Alex Ayala",
          role: "Controller",
          picture: "EBP5769Antz.jpg",
          offset: "0 10%"
        },
        {
          name: "Jackie Duran",
          role: "Accounting",
          picture: "winegardner-5593.jpg",
          offset: "0 12%"
        },
        {
          name: "Frankie Henderson",
          role: "Labor Compliance and Payroll",
          picture: "EBP5645Antz.jpg",
          offset: "0 23%"
        }
      ]
    },
    {
      name: "Operations",
      teamMembers: [
        {
          name: "Steve Grode",
          role: "President",
          picture: "winegardner-5495.png",
          offset: "0% 30%",
        },
        {
          name: "Armando Ramirez",
          role: "Project Estimator",
          picture: "EBP5705Antz.jpg",
          offset: "0% 10%",
        },
        {
          name: "Chris Contla",
          role: "Project Manager",
          picture: "https://t4.ftcdn.net/jpg/00/68/63/23/360_F_68632352_kmHLwFc2rQLmnKqn6gM0bhOPqxRTx8sY.jpg",
          offset: "0% 25%",
        },
      ]
    },
  ]
  return (
    <main id="about-us">
        <img loading="lazy" className="background" src={imgUrl}></img>

        <Heading title={"About Us"} content={"Here at G&R Constructors, we build more than structures — we build trust, integrity, and lasting relationships. Meet the team driving excellence from the ground up."}/>

       <ContentBlock 
            alignment="left" 
            wordContent={<ContentText header="The Team That Builds Your Vision" paragraph="G&R Constructors was founded on a simple idea: great work comes from great people. Behind every successful project is a team that makes it happen. Our skilled professionals combine innovation, precision, and teamwork to deliver results you can rely on every time."/>}
            imageContent={<img loading="lazy" src="public/about-us-block-1.png"/>}
            theme="light"
          />
          <ContentBlock 
            alignment="right" 
            wordContent={<ContentText header="Built on a Strong Foundation" paragraph="G&R Constructors was created by a team of lifelong builders who share a commitment to doing things the right way. With a focus on precision, reliability, and craftsmanship, the company has grown from a small partnership into a trusted provider of residential, commercial, and custom construction services. Today, G&R continues to build with integrity — delivering projects that stand the test of time."/>}
            imageContent={<img loading="lazy" src="public/about-us-block-2.png"/>}
            theme="dark"
          />

        <section id="departments">
          {departments.map((department, index) => {
            return <div key={index}><h1>{department.name}</h1><TeamMembers department={department}/></div>
          })}
        </section>

        <CallToAction />
    </main>
  );
}

export default About;