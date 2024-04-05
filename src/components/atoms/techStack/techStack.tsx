import { techStack } from "../../../data/techStack";
import "./techStack.scss";

const TechStack = () => {
  const { stack } = techStack;

  return (
    <div className="tech-stack">
      <span>Tech Stack</span><span>|</span>
      {stack.map((stack) => (
        <img className="tech-stack--item" src={stack.icon} alt={stack.name} key={stack.id} title={stack.name} />
      ))}
    </div>
  );
};

export default TechStack;
