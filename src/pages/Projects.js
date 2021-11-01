// components
import ProjectCard from '../components/ProjectCard';
// styles
import countries from '../images/countries-api.png';
import pixelsArt from '../images/pixels-art.png';
import trybewallet from '../images/trybewallet.png';

function Projects() {
  return (
    <section id="projects">
      <h2>Projetos</h2>
      <div>
        <ProjectCard
          image={pixelsArt}
          name="Pixels Art"
          github="https://github.com/CaioMorato/Pixels-art"
          deploy="https://caiomorato.github.io/Pixels-art/"
          tags={['HTML', 'CSS', 'Javascript']}
        />
        <ProjectCard
          image={countries}
          name="Countries-API"
          github="https://github.com/CaioMorato/Countries-List"
          deploy="https://caiomorato.github.io/Countries-List/#/"
          tags={['HTML', 'CSS', 'React', 'Sass', 'ContextAPI']}
        />
        <ProjectCard
          image={trybewallet}
          name="TrybeWallet"
          github="https://github.com/CaioMorato/TrybeWallet"
          deploy="https://caiomorato.github.io/TrybeWallet/"
          tags={['HTML', 'CSS', 'React', 'Redux']}
        />
      </div>
    </section>
  );
}

export default Projects;
