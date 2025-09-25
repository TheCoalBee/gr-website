function Project({project}) {
  return (
    <article className="project">
      <div className="project-carousel">
        {/* Image carousel logic */}
        <img src={project.images[0]} alt="" />
      </div>
      <div className="project-info">
        <h1>{project.title}</h1>
        <p><i class="fa-regular fa-map"></i>{project.address}</p>
        <p><i class="fa-regular fa-calendar"></i>{project.description}</p>
        <p><i class="fa-regular fa-ruler"></i>{project.measure}</p>
      </div>
    </article>
  );
}

export default Project;