/**
 * Coming soon section
 * Fake projects for now?
 * Services offered
 * Conceptual designs, mockups, inspiration images
 */

import Heading from "./components/Heading";
import Project from "./components/Project";
import CallToAction from "./components/CallToAction";

function Projects({imgUrl}) {
  let projects = [
    {
      title: "Project title 1",
      description: "2677 sq. feet",
      measure: "2677 sq. ft",
      address: "XXXXX Address Way, San Diego, CA",
      images: [
        "https://thumbs.dreamstime.com/b/many-tall-buildings-under-construction-cranes-20004270.jpg",
        "https://media.istockphoto.com/id/450837501/photo/new-industry-construction.jpg?s=612x612&w=0&k=20&c=OB2tQl6xfHQwrJPlLEwRhfUKIdOiqV7oKJ-tCGYj-TY=",
        "https://media.gettyimages.com/id/170616024/photo/concrete-highrise-construction-site.jpg?s=612x612&w=gi&k=20&c=UoL4CqK6T_X8j8ybEKnnUeubJ8OG2GUofEciDRkojsc="
      ]
    },
    {
      title: "Project title 1",
      description: "2677 sq. feet",
      measure: "2677 sq. ft",
      address: "XXXXX Address Way, San Diego, CA",
      images: [
        "https://thumbs.dreamstime.com/b/many-tall-buildings-under-construction-cranes-20004270.jpg",
        "https://media.istockphoto.com/id/450837501/photo/new-industry-construction.jpg?s=612x612&w=0&k=20&c=OB2tQl6xfHQwrJPlLEwRhfUKIdOiqV7oKJ-tCGYj-TY=",
        "https://media.gettyimages.com/id/170616024/photo/concrete-highrise-construction-site.jpg?s=612x612&w=gi&k=20&c=UoL4CqK6T_X8j8ybEKnnUeubJ8OG2GUofEciDRkojsc="
      ]
    },
    {
      title: "Project title 1",
      description: "2677 sq. feet",
      measure: "2677 sq. ft",
      address: "XXXXX Address Way, San Diego, CA",
      images: [
        "https://thumbs.dreamstime.com/b/many-tall-buildings-under-construction-cranes-20004270.jpg",
        "https://media.istockphoto.com/id/450837501/photo/new-industry-construction.jpg?s=612x612&w=0&k=20&c=OB2tQl6xfHQwrJPlLEwRhfUKIdOiqV7oKJ-tCGYj-TY=",
        "https://media.gettyimages.com/id/170616024/photo/concrete-highrise-construction-site.jpg?s=612x612&w=gi&k=20&c=UoL4CqK6T_X8j8ybEKnnUeubJ8OG2GUofEciDRkojsc="
      ]
    },
    {
      title: "Project title 1",
      description: "2677 sq. feet",
      measure: "2677 sq. ft",
      address: "XXXXX Address Way, San Diego, CA",
      images: [
        "https://thumbs.dreamstime.com/b/many-tall-buildings-under-construction-cranes-20004270.jpg",
        "https://media.istockphoto.com/id/450837501/photo/new-industry-construction.jpg?s=612x612&w=0&k=20&c=OB2tQl6xfHQwrJPlLEwRhfUKIdOiqV7oKJ-tCGYj-TY=",
        "https://media.gettyimages.com/id/170616024/photo/concrete-highrise-construction-site.jpg?s=612x612&w=gi&k=20&c=UoL4CqK6T_X8j8ybEKnnUeubJ8OG2GUofEciDRkojsc="
      ]
    }
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

        <CallToAction />
    </main>
  );
}

export default Projects;