import { projectData } from "../../../data/projectData";
import Project from "../../atoms/project/project";
import "./projectDetails.scss";

const ProjectDetails = () => {
  const { projects } = projectData;

  return (
    <div className="project-details">
      {projects.map(project => (
        <Project key={project.id} name={project.name} image={project.image} description={project.description} link={project.link} github={project.github} technologies={project.technologies} />
      ))}
    </div>
  )
}

export default ProjectDetails;