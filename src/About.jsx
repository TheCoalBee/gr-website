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
          picture: "src/assets/our-people/_EBP5769Antz.jpg",
          offset: "0 10%"
        },
        {
          name: "Jackie Duran",
          role: "Accounting",
          picture: "src/assets/our-people/winegardner-5593.jpg",
          offset: "0 12%"
        },
        {
          name: "Frankie Henderson",
          role: "Labor Compliance and Payroll",
          picture: "src/assets/our-people/_EBP5645Antz.jpg",
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
          picture: "src/assets/our-people/winegardner-5495.jpg",
          offset: "0% 30%",
        },
        {
          name: "Armando Ramirez",
          role: "Project Estimator",
          picture: "src/assets/our-people/_EBP5705Antz.jpg",
          offset: "0% 10%",
        },
        {
          name: "Chris Contla",
          role: "Project Manager",
          picture: "https://kepner-tregoe.com/wp-content/uploads/2025/06/68-1.jpg",
          offset: "0% 25%",
        },
      ]
    },
  ]
  return (
    <main id="about-us">
        <img className="background" src={imgUrl}></img>

        <Heading title={"About Us"} content={"Here at G&R Constructors, we build more than structures — we build trust, integrity, and lasting relationships. Meet the team driving excellence from the ground up."}/>

       <ContentBlock 
            alignment="left" 
            wordContent={<ContentText header="The Team That Builds Your Vision" paragraph="G&R Constructors was founded on a simple idea: great work comes from great people. Behind every successful project is a team that makes it happen. Our skilled professionals combine innovation, precision, and teamwork to deliver results you can rely on every time."/>}
            imageContent={<img src="https://t4.ftcdn.net/jpg/03/57/26/85/360_F_357268514_bOwjUJ3Uh9v2NuYdEpFAARnSvqSRYEC0.jpg"/>}
            theme="light"
          />
          <ContentBlock 
            alignment="right" 
            wordContent={<ContentText header="Built on a Strong Foundation" paragraph="G&R Constructors traces its roots back to a group of lifelong builders who shared a vision for doing things differently. In 2025, founders James Grant and Michael Rivera combined decades of hands-on construction experience with a shared commitment to precision, reliability, and craftsmanship. What began as a small partnership taking on residential projects soon grew into a trusted name in commercial and custom builds across the region."/>}
            imageContent={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Lunch_atop_a_Skyscraper_-_Charles_Clyde_Ebbets.jpg/500px-Lunch_atop_a_Skyscraper_-_Charles_Clyde_Ebbets.jpg"/>}
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