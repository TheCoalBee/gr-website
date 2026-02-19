import './styles/projects.css'
import Heading from "./components/misc/Heading";
import Project from "./components/projects/Project";
import CallToAction from "./components/misc/CallToAction";
import OurPartners from './components/misc/OurPartners';
import ImageCarousel from "./components/projects/ImageCarousel";
import ContentBlock from "./components/home/ContentBlock";
import ContentText from "./components/home/ContentText"


function Projects({imgUrl}) {
  let projects = [
    {
      title: "Westside Library Expansion Project",
      measure: "11,384 sq. ft",
      images: [
        "Archibald Library.png",
      ],
      scope: [
        "Acoustical Ceiling Tile",
        "Floating Acoustical Clouds",
      ]
    },
    {
      title: "Granger Junior High School",
      measure: "15,652 sq. ft",
      images: [
        "Granger JHS Building.png",
      ],
      scope: [
        "Exterior Composite Cladding"
      ]
    },
  ]

  return (
    <main id="projects">
        <img loading="lazy" className="background" src={imgUrl} alt="Projects background" />

        <Heading title={"Projects"} content={"From concept to completion, every project tells our story of precision, craftsmanship, and commitment. Explore the work that defines G&R Constructors."}/>

        <ContentBlock 
            alignment="left" 
            wordContent={<ContentText header="Our Portfolio" paragraph="Our portfolio reflects a commitment to excellence and precision in every project we undertake. Each engagement is approached with careful planning, innovative thinking, and attention to detail to ensure measurable results and lasting value. We take pride in delivering solutions that not only meet expectations but consistently exceed them."/>}
            imageContent={<ImageCarousel images={["Archibald Library.png", "Granger JHS Building.png"]} />}
            theme="dark"
          />

        <section className="all-projects">
          <h1>In Progress</h1>
          <section className="projects">
            {projects.map((project, index) => {
              return <Project key={index} project={project} />
            })}
          </section>
        </section>

        {/*<OurPartners />*/}

        <CallToAction />
    </main>
  );
}

export default Projects;