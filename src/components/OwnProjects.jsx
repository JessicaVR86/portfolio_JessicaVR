import { useState, useEffect } from "react";

function OwnProjects(props) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("src/data/Own.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects", error));
  }, []);

  return (
    <>
      <p className="article_title">
        {" "}
        {props.language === "es"
          ? "Proyectos Post-bootcamp "
          : "Post-bootcamp Projects"}{" "}
      </p>
      <div className="gridbox">
        {projects.map((project, index) => (
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
