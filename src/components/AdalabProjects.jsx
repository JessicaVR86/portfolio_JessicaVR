function AdalabProjects(props) {
  return (
    <>
      <p className="article_title">  {props.language === "es" ? " Proyectos durante el bootcamp " : "Bootcamp Projects"}   </p>
      <div className="gridbox">
        <figure className="projectbox">
          <a
            href="https://beta.adalab.es/modulo-1-evaluacion-final-JessicaVR86/"
            target="_blank"
          >
            <img
              className="boximage"
              src={props.projectCompany}
              alt="projectCompany"
            />
          </a>
          <figcaption className="descImage">Corporative website</figcaption>
          <p className="tools"> HTML - CSS </p>
        </figure>
        <figure className="projectbox">
          <a
            href="https://beta.adalab.es/modulo-3-evaluacion-final-JessicaVR86/"
            target="_blank"
          >
            <img
              className="boximage"
              src={props.projectHarryPotter}
              alt="projectHarryPotter"
            />
          </a>
          <figcaption className="descImage">Harry Potter website</figcaption>
          <p className="tools">React - HTML - SCSS </p>
        </figure>

        <figure className="projectbox">
          <a
            href="https://cipactlicasillas.github.io/project-promo-53-module-2-team-3/formulary.html"
            target="_blank"
          >
            <img
              className="boximage"
              src={props.projectVibeMatch}
              alt="projectVibeMatch"
            />
          </a>
          <figcaption className="descImage">Vibe Match website</figcaption>
          <p className="tools">Javascript - HTML - SCSS </p>
        </figure>

        <figure className="projectbox">
          <a
            href="https://proyecto-molon-2-0-sgwe.onrender.com/"
            target="_blank"
          >
            <img
              className="boximage"
              src={props.projectMolones}
              alt="projectMolones"
            />
          </a>
          <figcaption className="descImage">Proyectos Molones</figcaption>
          <p className="tools">React - Node.js - HTML </p>
        </figure>

        <figure className="projectbox">
          <a
            href="https://jessicavr86.github.io/modulo-react-ejercicio-intermedio/"
            target="_blank"
          >
            <img
              className="boximage"
              src={props.projectList}
              alt="projectList"
            />
          </a>
          <figcaption className="descImage">Lista de alumnas</figcaption>
          <p className="tools">React - HTML - SCSS </p>
        </figure>

        <figure className="projectbox">
          <a
            href="https://beta.adalab.es/modulo-2-evaluacion-final-JessicaVR86/"
            target="_blank"
          >
            <img
              className="boximage"
              src={props.projectNaruto}
              alt="projectNaruto"
            />
          </a>
          <figcaption className="descImage">Naruto Films</figcaption>
          <p className="tools">Javascript - HTML - SCSS</p>
        </figure>
      </div>
    </>
  );
}

export default AdalabProjects;
