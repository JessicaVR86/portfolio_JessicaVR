import "../styles/App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import projectCompany from "../images/AnonymousProxy.jpg";
import projectHarryPotter from "../images/HarryPotter.jpg";
import projectNaruto from "../images/Naruto.jpg";
import projectVibeMatch from "../images/vibeMatch.jpg";

function App() {
  return (
    <>
      <section className="herobox">
        <div className="hero">
          <h1>Jessica Valderrama</h1>
          <h2>Bienvenidos a mi portfolio de desarrollo web</h2>
          <p className="desc">
            He estudiado el bootcamp{" "}
            <span className="strongword">full-stack </span>
            en Adalab, anteriormente he tenido trabajos orientados al servicio
            de atención al cliente, en el sector e-commerce, seguros y banca.
          </p>
          <div className="icons">
            <FontAwesomeIcon icon={faSquareGithub} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faIdCard} />
          </div>
        </div>
      </section>
      <article className="box">
        <h3 className="article_title">Sobre mi</h3>
        <p className="aboutme">
          Este cambio de sector y el enamorarme del código me han dado una{" "}
          <span className="strongword">energía </span>
          desbordante, una <span className="strongword">ilusión </span> infinita
          y unas <span className="strongword">ganas</span> tremendas para
          empezar a trabajar de ello. <br></br>A continuación os muestro los
          ejercicios que he realizado de manera individual y en grupo durante el
          curso de formación.<br></br>Me gusta el mundo e-commerce y el
          Front-End, por eso en mi portfolio os mostraré los proyectos que iré
          realizando dirigidos a diferentes tipos de negocio.
        </p>
      </article>
      <main>
        <section className="box">
          <p className="article_title">Proyectos E-commerce </p>
          <p className="article_title">Proyectos durante el bootcamp</p>
          <figure className="projectbox">
            <a
              href="https://beta.adalab.es/modulo-1-evaluacion-final-JessicaVR86/"
              target="_blank"
            >
              <img
                className="boximage"
                src={projectCompany}
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
                src={projectHarryPotter}
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
                src={projectVibeMatch}
                alt="projectVibeMatch"
              />
            </a>
            <figcaption className="descImage">Harry Potter website</figcaption>
            <p className="tools">Javascript - HTML - SCSS </p>
          </figure>

          <figure className="projectbox">
            <a
              href="https://beta.adalab.es/modulo-2-evaluacion-final-JessicaVR86/"
              target="_blank"
            >
              <img
                className="boximage"
                src={projectNaruto}
                alt="projectNaruto"
              />
            </a>
            <figcaption className="descImage">Naruto Films</figcaption>
            <p className="tools">Javascript - HTML - SCSS</p>
          </figure>
        </section>
      </main>
    </>
  );
}

export default App;
