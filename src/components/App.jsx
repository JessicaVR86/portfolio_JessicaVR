import "../styles/App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import projectCompany from "../images/AnonymousProxy.jpg";
import projectHarryPotter from "../images/HarryPotter.jpg";
import projectNaruto from "../images/Naruto.jpg";
import projectVibeMatch from "../images/vibeMatch.jpg";
import Hero from "./Hero";
import Desc from "./Desc";
import OwnProjects from "./OwnProjects";
import AdalabProjects from "./AdalabProjects";
import projectJeans from "../images/jeanscover.jpg";

function App() {
  return (
    <>
      <section className="herobox">
        <div className="hero">
          <Hero />
          <div className="icons">
            <a href="https://github.com/JessicaVR86" target="_blank">
              <FontAwesomeIcon icon={faSquareGithub} />
            </a>

            <a
              href="https://www.linkedin.com/in/jessicavrc277205356/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.canva.com/design/DAGsIteEbWM/bhF-zjIA7fSThewe97vq9Q/view?utm_content=DAGsIteEbWM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha783c67ea2"
              target="_blank"
            >
              <FontAwesomeIcon icon={faIdCard} />
            </a>
          </div>
        </div>
      </section>
      <Desc />
      <main>
        <section className="box">
          <OwnProjects    projectJeans ={projectJeans}/>
          <AdalabProjects
            projectCompany={projectCompany}
            projectHarryPotter={projectHarryPotter}
            projectNaruto={projectNaruto}
            projectVibeMatch={projectVibeMatch}
          
          />
        </section>
      </main>
    </>
  );
}

export default App;
