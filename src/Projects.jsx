import './styles/projects.css'
import Heading from "./components/misc/Heading";
import Project from "./components/projects/Project";
import CallToAction from "./components/misc/CallToAction";
import OurPartners from './components/misc/OurPartners';


function Projects({imgUrl}) {
  let projects = [
    {
      title: "Westside Library Expansion Project",
      description: "03/28/2025",
      measure: "11,384 sq. ft",
      address: "9191 Base Line Rd, Rancho Cucamonga, CA 91730",
      images: [
        "src/assets/projects/Archibald Library.png",
      ]
    },
    {
      title: "Granger Junior High School",
      description: "12/12/2024",
      measure: "15,652 sq. ft",
      address: "2101 Granger Ave, National City, CA 91950",
      images: [
        "src/assets/projects/Granger JHS Building.png",
      ]
    },
  ]

  return (
    <main id="projects">
        <img className="background" src={imgUrl}></img>

        <Heading title={"Projects"} content={"From concept to completion, every project tells our story of precision, craftsmanship, and commitment. Explore the work that defines G&R Constructors."}/>

        <section className="projects">
          {projects.map((project, index) => {
            return <Project key={index} project={project} />
          })}
        </section>

        <OurPartners />

        <CallToAction />
    </main>
  );
}

export default Projects;