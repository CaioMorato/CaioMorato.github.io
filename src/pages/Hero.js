// components
import Header from '../components/Header';
import Typewriter from 'typewriter-effect';
// styles
import { BsGithub, BsLinkedin, BsStackOverflow, BsEnvelope } from 'react-icons/bs';

function Hero() {
  new Typewriter('#typewriter', {
    strings: ['Hello', 'World'],
    autoStart: true,
  });

  return (
    <div id="hero">
      <Header />
      <section className="general-info">
        <h1>Bem vindo!</h1>
        <div className="typewritter-container">
          <span>Eu sou</span>
          <Typewriter
            className="typewritter"
            options={{
              strings: ['Caio Morato', 'Front-end Dev.', 'Back-end Dev.'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="sm-about">
          <p>Desenvolvedor Front-end e Back-end com 6+ meses de experiência.</p>
        </div>
        <div className="social-media">
          <a href="https://github.com/CaioMorato" target="_blank" rel="noreferrer">
            <BsGithub className="social-media-icon" size="25px" />
          </a>
          <a href="https://linkedin.com/in/morato-dev" target="_blank" rel="noreferrer">
            <BsLinkedin className="social-media-icon" size="25px" />
          </a>
          <a
            href="https://stackoverflow.com/users/16921129/Morato_dev"
            target="_blank"
            rel="noreferrer"
          >
            <BsStackOverflow className="social-media-icon" size="25px" />
          </a>
          <a href="mailto:morato_dev@protonmail.com" target="_blank" rel="noreferrer">
            <BsEnvelope className="social-media-icon" size="25px" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Hero;
