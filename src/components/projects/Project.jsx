import ImageCarousel from "./ImageCarousel";

function Project({project}) {
  return (
    <article className="project">
      <div className="project-carousel">
        <ImageCarousel images={project.images} autoplay={true} autoplayDelay={5000} aspectRatio="4/3" />
      </div>
      <div className="project-info">
        <h1>{project.title}</h1>
        <p><i className="fa-regular fa-map fa-fw"></i>
          {project.address}
        </p>
        <p><i className="fa-regular fa-calendar fa-fw"></i>{project.description}</p>
        <p><i className="fa-regular fa-ruler fa-fw"></i>{project.measure}</p>
      </div>
    </article>
  );
}

export default Project;