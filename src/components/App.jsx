import "../styles/App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import projectCompany from "../images/AnonymousProxy.jpg";
import projectHarryPotter from "../images/HarryPotter.jpg";
import projectNaruto from "../images/Naruto.jpg";
import projectVibeMatch from "../images/vibeMatch.jpg";
import projectList from "../images/ListPromo53.jpg";
import projectFestivos from "../images/Festivos.jpg";
import Hero from "./Hero";
import Desc from "./Desc";
import OwnProjects from "./OwnProjects";
import AdalabProjects from "./AdalabProjects";
import projectJeans from "../images/jeanscover.jpg";
import projectMolones from "../images/Molones.jpg";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("es");
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "es" ? "en" : "es"));
  };

  return (
    <>
      <section className="herobox">
        <button onClick={toggleLanguage}>
          {language === "es" ? "English" : "Español"}
        </button>

        <div className="hero">
          <Hero language={language} />
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
          </div>
        </div>
      </section>
      <Desc language={language} />
      <main>
        <section className="box">
          <AdalabProjects
            language={language}
            projectCompany={projectCompany}
            projectHarryPotter={projectHarryPotter}
            projectNaruto={projectNaruto}
            projectVibeMatch={projectVibeMatch}
            projectList={projectList}
            projectMolones={projectMolones}
          />
          <OwnProjects
            language={language}
            projectJeans={projectJeans}
            projectFestivos={projectFestivos}
          />
        </section>
      </main>
    </>
  );
}

export default App;
