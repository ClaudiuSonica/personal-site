import { useContext } from "react";
import { ThemeContext } from "../../../utils/context/themeContext";
import "./project.scss";
import githubPic from "/assets/github.svg";
import linkPic from "/assets/link.png";

interface ProjectProps {
  name: string;
  image: string;
  description: string;
  link: string;
  github: string;
  technologies: string[];
}

const Project: React.FC<ProjectProps> = ({ name, image, description, link, github, technologies }) => {
  
  const {theme} = useContext(ThemeContext);

  return (
    <div className={`project-details--item ${theme}`}>
      <div className="project-details--item__img">
        <img src={image} alt={name} />
      </div>
      <div className="project-details--item__content">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="project-details--item__content--tech">
          {technologies.map(technology => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        <div className="project-details--item__content--links">
          <a href={github} target="_blank" rel="noopener noreferrer">
            Code{" "}
            <span>
              <img src={githubPic} alt="github logo" />
            </span>
          </a>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Live Demo{" "}
            <span>
              <img src={linkPic} alt="live preview" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
