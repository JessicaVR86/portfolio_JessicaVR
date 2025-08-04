function AdalabProjects({ language, projectsAda }) {
  return (
    <>
      <p className="article_title">
        {language === "es"
          ? " Proyectos durante el bootcamp "
          : "Bootcamp Projects"}
      </p>
      <div className="gridbox">
        {projectsAda.map((project, index) => (
          <figure key={index} className="projectbox">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img
                className="boximage"
                src={project.image}
                alt={project.name}
              />
            </a>
            <figcaption className="descImage"> {project.name}</figcaption>
            <p className="tools"> {project.tools} </p>
          </figure>
        ))}
      </div>
    </>
  );
}

export default AdalabProjects;
