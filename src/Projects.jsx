import './styles/projects.css'
import Heading from "./components/misc/Heading";
import Project from "./components/projects/Project";
import CallToAction from "./components/misc/CallToAction";
import OurPartners from './components/misc/OurPartners';
import ContentBlock from "./components/home/ContentBlock";
import ContentText from "./components/home/ContentText"


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

        <ContentBlock 
            alignment="right" 
            wordContent={<ContentText header="Our Project Portfolio" paragraph="Our portfolio reflects a commitment to excellence and precision in every project we undertake. Each engagement is approached with careful planning, innovative thinking, and attention to detail to ensure measurable results and lasting value. We take pride in delivering solutions that not only meet expectations but consistently exceed them."/>}
            imageContent={<img src="https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000"/>}
            theme="light"
          />

        <section className="all-projects">
          <h1>In Progress</h1>
          <section className="projects">
            {projects.map((project, index) => {
              return <Project key={index} project={project} />
            })}
          </section>
        </section>

        <OurPartners />

        <CallToAction />
    </main>
  );
}

export default Projects;