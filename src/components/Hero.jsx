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
            He realizado el bootcamp de desarrollo web en Adalab, donde aprendí
            a trabajar con HTML, CSS,{" "}
            <span className="strongword">JavaScript</span>, React, Node.js,
            Express y MySQL. También participé en la Piscina 42 de Telefónica,
            reforzando mi lógica, autonomía y el uso de GitHub, Terminal y C.
            <br></br>
            Además, he completado un curso de desarrollo con IA, formándome en
            <span className="strongword"> Python</span> y sus principales
            librerías, y disfruto especialmente de la automatización de
            procesos.<br></br>
            Actualmente sigo en aprendizaje continuo: estudio{" "}
            <span className="strongword"> Big Data </span>en Fundaula y
            servicios cloud en el programa{" "}
            <span className="strongword">AWS</span> re/Start en Adalab.
          </>
        ) : (
          <>
            I completed the web development bootcamp at Adalab, where I learned
            to work with HTML, CSS,{" "}
            <span className="strongword">JavaScript</span>, React, Node.js,
            Express, and MySQL. I also took part in Telefónica's 42 Piscine,
            strengthening my logic, autonomy, and my use of GitHub, the
            Terminal, and C.
            <br></br>
            In addition, I completed a development course focused on AI, gaining
            experience with <span className="strongword">Python</span> and its
            main libraries, and I especially enjoy process automation.<br></br>I
            am currently in continuous learning: I am studying{" "}
            <span className="strongword">Big Data</span> at Fundaula and cloud
            services through the <span className="strongword">AWS</span>{" "}
            re/Start program at Adalab.
          </>
        )}
      </p>
    </>
  );
}

export default Hero;
