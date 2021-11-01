// components
import Tags from './Tags';
//styles
import pixelsArt from '../images/pixels-art.png';
import { BsGithub, BsPlayFill } from 'react-icons/bs';

function ProjectCard() {
  return (
    <div id="project-card">
      <img src={pixelsArt} alt="" />
      <div className="overlay">
        <div className="project-name">PixelsArt</div>
        <div className="project-buttons">
          <a href="https://github.com/CaioMorato/Pixels-art" target="_blank" rel="noreferrer">
            <BsGithub className="project-icons" size="30px" />
          </a>
          <a href="https://caiomorato.github.io/Pixels-art/" target="_blank" rel="noreferrer">
            <BsPlayFill className="project-icons" size="30px" />
          </a>
        </div>
        <div className="project-tags">
          <Tags tag="React" />
          <Tags tag="React" />
          <Tags tag="React" />
          <Tags tag="React" />
          <Tags tag="React" />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
