// components
import ProjectCard from '../components/ProjectCard';
// styles
import countries from '../images/countries-api.png';
import pixelsArt from '../images/pixels-art.png';
import trybewallet from '../images/trybewallet.png';
import restapi from '../images/restapi.png';
import githubSearch from '../images/github-search.png';

function Projects() {
  return (
    <section id="projects">
      <h2>Projetos</h2>
      <div className="projects-container">
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
        <ProjectCard
          image={restapi}
          name="RestAPI-MongoDB"
          github="https://github.com/CaioMorato/Rest-API_mongoDB"
          deploy="https://github.com/CaioMorato/Rest-API_mongoDB"
          tags={['Node', 'Express']}
        />
        <ProjectCard
          image={githubSearch}
          name="Github Search"
          github="https://github.com/CaioMorato/github-search"
          deploy="https://caiomorato.github.io/github-search"
          tags={['HTML', 'CSS', 'Tailwind', 'React', 'ContextAPI']}
        />
      </div>
    </section>
  );
}

export default Projects;
