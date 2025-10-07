/**
 * Mission statement + core values
 * Company story, why company was founded
 * Introduce the team
 * Certifications, insurance, licenses
 */

import Heading from "./components/misc/Heading";
import TeamMembers from "./components/about/TeamMembers";
import CallToAction from "./components/misc/CallToAction";

function About({imgUrl}) {
  let departments = [
    {
      name: "Accounting",
      teamMembers: [
        {
          name: "Name Name",
          role: "Office Manager",
          picture: "https://static.wikia.nocookie.net/anchorman/images/1/10/Ron_burgundy.jpg/revision/latest?cb=20120329160125"
        },
        {
          name: "Name Name",
          role: "Payroll",
          picture: "https://static.wikia.nocookie.net/anchorman/images/1/10/Ron_burgundy.jpg/revision/latest?cb=20120329160125"
        }
      ]
    },
    {
      name: "Operations",
      teamMembers: [
        {
          name: "Name Name",
          role: "Project Manager",
          picture: "https://static.wikia.nocookie.net/anchorman/images/1/10/Ron_burgundy.jpg/revision/latest?cb=20120329160125"
        },
        {
          name: "Name Name",
          role: "General Superintendent",
          picture: "https://static.wikia.nocookie.net/anchorman/images/1/10/Ron_burgundy.jpg/revision/latest?cb=20120329160125"
        }
      ]
    },
  ]
  return (
    <main id="about-us">
        <img className="background" src={imgUrl}></img>

        <Heading title={"About Us"} content={"Here at G&R Constructors, we build more than structures — we build trust, integrity, and lasting relationships. Meet the team driving excellence from the ground up."}/>

        <section id="departments">
          {departments.map((department, index) => {
            return <TeamMembers key={index} department={department}/>
          })}
        </section>

        <CallToAction />
    </main>
  );
}

export default About;