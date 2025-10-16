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
          name: "Joe Smith",
          role: "Office Manager",
          picture: "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
        },
        {
          name: "Bonnie Clyde",
          role: "Payroll",
          picture: "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
        },
        {
          name: "Bonnie Clyde",
          role: "Payroll",
          picture: "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
        },
        {
          name: "Bonnie Clyde",
          role: "Payroll",
          picture: "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
        },
        {
          name: "Bonnie Clyde",
          role: "Payroll",
          picture: "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
        }
      ]
    },
    {
      name: "Operations",
      teamMembers: [
        {
          name: "Casey Ricks",
          role: "Project Manager",
          picture: "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
        },
        {
          name: "Steve Grode",
          role: "General Superintendent",
          picture: "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
        },
        {
          name: "Bonnie Clyde",
          role: "Payroll",
          picture: "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
        },
        {
          name: "Bonnie Clyde",
          role: "Payroll",
          picture: "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
        },
        {
          name: "Bonnie Clyde",
          role: "Payroll",
          picture: "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
        },
        {
          name: "Bonnie Clyde",
          role: "Payroll",
          picture: "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
        }
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
            theme="dark"
          />

        <section id="departments">
          {departments.map((department, index) => {
            return <><h1>{department.name}</h1><TeamMembers key={index} department={department}/></>
          })}
        </section>

        <CallToAction />
    </main>
  );
}

export default About;