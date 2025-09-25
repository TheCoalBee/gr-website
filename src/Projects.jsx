/**
 * Coming soon section
 * Fake projects for now?
 * Services offered
 * Conceptual designs, mockups, inspiration images
 */

import Heading from "./components/Heading";

function Projects({imgUrl}) {
  return (
    <main id="projects">
        <img className="background" src={imgUrl}></img>

        <Heading title={"Projects"} />

        <section>
            {/* List of projects in this section */}
        </section>
    </main>
  );
}

export default Projects;