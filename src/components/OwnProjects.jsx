function OwnProjects(props) {
  return (
    <> 
    <p className="article_title">Proyectos Post-bootcamp </p>
          <div className="gridbox"></div>

          <figure className="projectbox">
          <a
            href="https://jessicavr86.github.io/jeansStore/"
            target="_blank"
          >
            <img
              className="boximage"
              src={props.projectJeans}
              alt="projectJeans"
            />
          </a>
          <figcaption className="descImage">Jeans store / Mobile First En construcción  </figcaption>
          <p className="tools"> React - HTML - CSS </p>
        </figure>
    </>
  );
}

export default OwnProjects;