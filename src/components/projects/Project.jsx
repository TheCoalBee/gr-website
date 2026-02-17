import ImageCarousel from "./ImageCarousel";

function Project({project}) {
  return (
    <article className="project">
      <div className="project-carousel">
        <ImageCarousel images={project.images} autoplay={true} autoplayDelay={5000} aspectRatio="4/3" />
      </div>
      <div className="project-info">
        <h1>{project.title}</h1>
        {project.scope.map((item, index) => {
          return <p key={index}><i className="fa-regular fa-hammer fa-fw"></i>{item}</p>
        })}
        <p><i className="fa-regular fa-hammer fa-fw"></i>{project.measure}</p>
      </div>
    </article>
  );
}

export default Project;