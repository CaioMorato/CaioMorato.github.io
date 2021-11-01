// styles
import pfp from '../images/no-bg-pfp.png';
import cv from '../cv-morato.pdf';

function About() {
  return (
    <section id="about">
      <h2>Sobre mim</h2>
      <div className="about-info">
        <div className="image-container">
          <img src={pfp} alt="Minha foto" />
        </div>
        <div className="p-container">
          <p>
            Me chamo Caio Morato, tenho 23 e moro em Piracicaba-SP. Comecei meus estudos em
            programação no começo de 2021. Sou um desenvolvedor fullstack com foco em back-end e
            estou em busca de minha primeira oportunidade no mercado de trabalho.
          </p>
        </div>
        <div className="cv-container">
          <a href={cv} className="cv-button" download>
            Currículo.pdf
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
