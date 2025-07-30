function Desc({ language }) {
  return (
    <article className="box">
      <h3 className="article_title">
        {" "}
        {language === "es" ? "Sobre mi" : "About me"}{" "}
      </h3>
      <p className="aboutme">
        {language === "es" ? (
          <>
            Antes de adentrarme en el desarrollo web, trabajé en atención al
            cliente en <span className="strongword">e-commerce</span>,
            <span className="strongword"> seguros</span> y
            <span className="strongword"> banca</span> donde aprendí la
            importancia de comunicar con claridad, empatía y resolver con
            eficacia. <br></br>
            Apostar por la tecnología marcó un antes y un después en mi vida
            profesional: salí de mi zona de confort y decidí reinventarme.{" "}
            <br></br>
            Este cambio de rumbo me ha llenado de
            <span className="strongword"> energía</span>,
            <span className="strongword"> motivación</span> e
            <span className="strongword"> ilusión</span> por comenzar a aplicar
            todo lo aprendido en proyectos reales. <br></br>
            En este portfolio veréis ejercicios que he realizado durante el
            periodo de formacion, tanto individuales como grupales, a mi me
            apasiona el front-end y el e-commerce, por eso seguiré creando
            páginas para diferentes tipos de negocio.
          </>
        ) : (
          <>
            
            Before delving into web development, I worked in customer service
            across <span className="strongword">e-commerce</span>,
            <span className="strongword">insurance</span>, and
            <span className="strongword"> banking</span>, where I learned the
            importance of communicating clearly, empathetically, and solving
            problems effectively. Embracing technology marked a turning point in
            my professional journey: I stepped out of my comfort zone and chose
            to reinvent myself. This shift has filled me with
            <span className="strongword"> energy</span>,
            <span className="strongword"> motivation</span>, and
            <span className="strongword"> enthusiasm </span> to apply everything
            I've learned to real-world projects. In this portfolio, you'll find
            exercises I completed during my training period, both individually
            and as part of a team. I'm passionate about front-end development
            and e-commerce, and I'm committed to continuing to build websites
            for diverse businesses.
          </>
        )}
      </p>
    </article>
  );
}

export default Desc;
