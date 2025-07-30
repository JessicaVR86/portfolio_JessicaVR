function OwnProjects(props) {
  return (
    <>
      <p className="article_title"> {props.language === "es" ? "Proyectos Post-bootcamp " : "Post-bootcamp Projects"}  </p>
      <div className="gridbox">

      <figure className="projectbox">
        <a href="https://jessicavr86.github.io/dias_festivos/" target="_blank">
          <img
            className="boximage"
            src={props.projectFestivos}
            alt="projectFestivos"
          />
        </a>
        <figcaption className="descImage"> Festivos </figcaption>
        <p className="tools"> Javascript -React - HTML - CSS </p>
      </figure>
      <figure className="projectbox">
        <a href="https://jessicavr86.github.io/jeansStore/" target="_blank">
          <img
            className="boximage"
            src={props.projectJeans}
            alt="projectJeans"
          />
        </a>
        <figcaption className="descImage">
          Jeans store / En construcción - Under Construction
        </figcaption>
        <p className="tools"> Javascript - React - HTML - CSS </p>
      </figure>
      </div>
    </>
  );
}

export default OwnProjects;
