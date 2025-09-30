/**
 * Mission statement + core values
 * Company story, why company was founded
 * Introduce the team
 * Certifications, insurance, licenses
 */

import Heading from "./components/Heading";
import TeamMembers from "./components/TeamMembers";
import CallToAction from "./components/CallToAction";

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

        <Heading title={"About Us"} />

        <section id="departments">
          {/*projects.map((project, index) => {
            return <Project key={index} project={project} />
          })*/}
          {departments.map((department, index) => {
            return <TeamMembers key={index} department={department}/>
          })}
        </section>

        <CallToAction />
    </main>
  );
}

export default About;