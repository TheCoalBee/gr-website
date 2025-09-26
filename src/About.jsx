/**
 * Mission statement + core values
 * Company story, why company was founded
 * Introduce the team
 * Certifications, insurance, licenses
 */

import Heading from "./components/Heading";
import TeamMembers from "./components/TeamMembers";

function About({imgUrl}) {
  let departments = [
    {
      name: "Accounting",
      teamMembers: [
        {
          name: "Name Name",
          role: "Office Manager",
          picture: "https://as1.ftcdn.net/jpg/00/65/11/80/1000_F_65118027_7hYshdPKHSDLQo0ZTqjjNRDojhGXyJiv.jpg"
        },
        {
          name: "Name Name",
          role: "Payroll",
          picture: "https://as1.ftcdn.net/jpg/00/65/11/80/1000_F_65118027_7hYshdPKHSDLQo0ZTqjjNRDojhGXyJiv.jpg"
        }
      ]
    },
    {
      name: "Operations",
      teamMembers: [
        {
          name: "Name Name",
          role: "Project Manager",
          picture: "https://as1.ftcdn.net/jpg/00/65/11/80/1000_F_65118027_7hYshdPKHSDLQo0ZTqjjNRDojhGXyJiv.jpg"
        },
        {
          name: "Name Name",
          role: "General Superintendent",
          picture: "https://as1.ftcdn.net/jpg/00/65/11/80/1000_F_65118027_7hYshdPKHSDLQo0ZTqjjNRDojhGXyJiv.jpg"
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
    </main>
  );
}

export default About;