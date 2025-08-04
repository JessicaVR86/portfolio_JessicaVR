function OwnProjects({ language, projectsOwn }) {
  return (
    <>
      <p className="article_title">
        {language === "es"
          ? "Proyectos Post-bootcamp "
          : "Post-bootcamp Projects"}
      </p>
      <div className="gridbox">
        {projectsOwn.map((project, index) => (
          <figure key={index} className="projectbox">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img
                className="boximage"
                src={project.image}
                alt={project.name}
              />
            </a>
            <figcaption className="descImage"> {project.name} </figcaption>
            <p className="tools"> {project.tools} </p>
          </figure>
        ))}
      </div>
    </>
  );
}

export default OwnProjects;
