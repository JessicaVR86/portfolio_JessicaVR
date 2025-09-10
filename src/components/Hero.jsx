function Hero({ language }) {
  return (
    <>
      <h1>Jessica Valderrama</h1>
      <h2>
        {language === "es"
          ? "Bienvenidos a mi portfolio de desarrollo web"
          : "Welcome to my web development portfolio"}
      </h2>
      <p className="desc">
        {language === "es" ? (
          <>
            He realizado el bootcamp de desarrollo web en Adalab, una
            experiencia transformadora que me ha permitido dominar herramientas
            clave como <span className="strongword">HTML</span>,
            <span className="strongword"> CSS</span>,
            <span className="strongword"> JavaScript</span>,
            <span className="strongword"> React</span> en el frontend, y
            <span className="strongword"> Node.js</span>,
            <span className="strongword"> Express</span>,
            <span className="strongword"> MySQL</span> y
            <span className="strongword"> JWT</span> en el backend. Gracias a
            esta formación, comprendo el ciclo completo de una aplicación web.
            <br></br>Además, he participado en la exigente Piscina 42 de
            Telefónica, donde afiancé el uso de
            <span className="strongword"> GitHub</span>,
            <span className="strongword"> Terminal </span>y
            <span className="strongword"> programación en C</span>, enfrentando
            desafíos técnicos que fortalecieron mi autonomía, lógica y capacidad
            de resolución.<br></br>Por iniciativa propia, me he formado en
            <span className="strongword"> Prompt Engineering</span> y en el uso
            de modelos de lenguaje <span className="strongword">(LLM) </span>
            aplicados a la inteligencia artificial, lo que me permite integrar
            <span className="strongword"> IA</span> en mis procesos para ser más
            eficaz, estratégica y creativa.
          </>
        ) : (
          <>
            I completed the web development bootcamp at Adalab, a transformative
            experience that allowed me to master key tools such as
            <span className="strongword"> HTML</span>,
            <span className="strongword"> CSS</span>,
            <span className="strongword"> JavaScript</span>, and
            <span className="strongword"> React</span> on the frontend, and
            <span className="strongword"> Node.js</span>,
            <span className="strongword"> Express</span>,
            <span className="strongword"> MySQL</span>, and
            <span className="strongword"> JWT</span> on the backend. Thanks to
            this training, I understand the full cycle of a web application.
            <br></br>Additionally, I took part in the demanding Piscina 42 at
            Telefónica, where I strengthened my skills in
            <span className="strongword"> GitHub</span>,
            <span className="strongword"> Terminal</span>, and
            <span className="strongword"> C programming</span>, facing technical
            challenges that enhanced my autonomy, logic, and problem-solving
            abilities.
            <br></br>On my own initiative, I've trained in
            <span className="strongword"> Prompt Engineering</span> and the use
            of <span className="strongword">LLM</span> language models applied
            to artificial intelligence, which enables me to integrate
            <span className="strongword"> AI</span> into my workflows to be more
            effective, strategic, and creative.
          </>
        )}
      </p>
    </>
  );
}

export default Hero;
