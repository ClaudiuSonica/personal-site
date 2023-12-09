import { techStack } from "../../../data/techStack";
import "./techStack.scss";

const TechStack = () => {
  const { stack } = techStack;

  return (
    <div className="tech-stack">
      <span>Tech Stack |</span>
      {stack.map((stack) => (
        <img className="tech-stack--item" src={stack.icon} alt={stack.name} key={stack.id} />
      ))}
    </div>
  );
};

export default TechStack;
