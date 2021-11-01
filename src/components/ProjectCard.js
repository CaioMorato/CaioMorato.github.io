// components
import Tags from './Tags';
//styles
import { BsGithub, BsPlayFill } from 'react-icons/bs';

function ProjectCard({ image, name, github, deploy, tags }) {
  return (
    <div id="project-card">
      <img src={image} alt="" />
      <div className="overlay">
        <div className="project-name">{name}</div>
        {/* <div className="project-buttons">
          <a href={github} target="_blank" rel="noreferrer">
            <BsGithub className="project-icons" size="30px" />
          </a>
          <a href={deploy} target="_blank" rel="noreferrer">
            <BsPlayFill className="project-icons" size="30px" />
          </a>
        </div>
        <div className="project-tags">
          {tags.map((tag) => (
            <Tags tag={`${tag}`} />
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default ProjectCard;
