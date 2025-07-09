import "../styles/App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <>
      <section className="herobox">
        <div className="hero">
          <h1>Jessica Valderrama</h1>
          <h2>Bienvenidos a mi portfolio de desarrollo web</h2>
          <p className="desc">
            He estudiado el bootcamp <span className="strongword">full-stack </span>
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
      <article className="articlebox">
        <h3 className="article_title">Sobre mi</h3>
        <p className="aboutme">
          Este cambio de sector y el enamorarme del código me han dado una <span className="strongword">energía </span> 
          desbordante, una <span className="strongword">ilusión </span> infinita y unas <span className="strongword">ganas</span>  tremendas para empezar
          a trabajar de ello. <br></br>A continuación os muestro los
          ejercicios que he realizado de manera individual y en grupo durante el
          curso de formación. A mi me gusta el mundo e-commerce y el frontend,
          por eso en mi portfolio os mostraré los proyectos que iré realizando
          dirigidos a diferentes tipos de negocio.
        </p>
      </article>
      <main>
        <p>Proyectos durante el bootcamp</p>
        <p>Proyectos E-commerce </p>
      </main>
    </>
  );
}

export default App;
