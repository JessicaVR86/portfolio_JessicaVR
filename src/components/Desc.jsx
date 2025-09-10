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
            Tras años en atención al cliente en{" "}
            <span className="strongword"> e-commerce</span>,{" "}
            <span className="strongword"> banca</span> y{" "}
            <span className="strongword"> seguros</span>, aprendí a comunicar
            con empatía, escuchar activamente y resolver con eficacia.<br></br>
            Apostar por la tecnología marcó un antes y un después: salí de mi
            zona de confort, me formé intensamente y descubrí una pasión por el
            desarrollo web, especialmente el front-end y el mundo digital.
            <br></br>Me motiva aprender cada día y aplicar lo que sé en
            proyectos reales que aporten valor. Este portfolio refleja ese
            camino: <span className="strongword"> esfuerzo constante</span>,{" "}
            <span className="strongword"> ganas auténticas</span> y una visión
            clara de hacia dónde quiero crecer, en definitiva reinventarme fue
            mi mejor decisión.
          </>
        ) : (
          <>
            After years working in customer service in{" "}
            <span className="strongword">e-commerce</span>,{" "}
            <span className="strongword">banking</span> and{" "}
            <span className="strongword">insurance</span>, I learned to
            communicate with empathy, listen actively, and solve problems
            effectively.<br></br>Choosing technology marked a turning point: I
            stepped out of my comfort zone, trained intensively, and discovered
            a passion for web development—especially front-end and the digital
            world.<br></br>I'm driven by the desire to learn every day and apply
            what I know to real projects that create value. This portfolio
            reflects that journey:{" "}
            <span className="strongword">consistent effort</span>,{" "}
            <span className="strongword">genuine drive</span>, and a clear
            vision of where I want to grow. Reinventing myself was, without a
            doubt, my best decision.
          </>
        )}
      </p>
    </article>
  );
}

export default Desc;
