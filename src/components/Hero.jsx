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
            He realizado el bootcamp de desarrollo web
            <span className="strongword"> fullstack</span> en Adalab, y ha sido
            una experiencia transformadora, donde he adquirido formación técnica
            en herramientas como HTML, CSS, JavaScript, React y Git. <br></br>En
            la parte backend, he trabajado con Node.js, Express, MySQL (usando
            Workbench) y JWT, lo que me ha permitido comprender el ciclo
            completo de desarrollo de una aplicación web.
          </>
        ) : (
          <>
            I completed the<span className="strongword"> Full Stack </span> web
            development bootcamp at Adalab, an experience that was truly
            transformative. I gained technical training in tools such as HTML,
            CSS, JavaScript, React, and Git.<br></br>On the backend side, I
            worked with Node.js, Express, MySQL (using Workbench), and JWT,
            which gave me a solid understanding of the entire web application
            development cycle..
          </>
        )}
      </p>
    </>
  );
}

export default Hero;
