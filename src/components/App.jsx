import "../styles/App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Hero from "./Hero";
import Desc from "./Desc";
import OwnProjects from "./OwnProjects";
import AdalabProjects from "./AdalabProjects";
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
          <AdalabProjects language={language} />
          <OwnProjects language={language} />
        </section>
      </main>
    </>
  );
}

export default App;
