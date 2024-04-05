import { techStack } from "../../../data/techStack";
import { MotionConfig, motion } from "framer-motion";
import "./techStack.scss";

const TechStack = () => {
  const { stack } = techStack;

  const duplicateStack = [...stack, ...stack, ...stack, ...stack, ...stack];

  return (
    <div className="tech-stack--container">
      <span className="tech-stack--text">Tech Stack |</span>
      <MotionConfig transition={{ duration: 0 }}>
        <motion.div
          animate={{
            x: ["-100%", "0%"],
            transition: {
              ease: "linear",
              duration: 5,
              repeat: Infinity,
            },
          }}
          className="tech-stack">
          {duplicateStack.map((item, index) => (
            <div key={index} className="tech-stack--item">
              <img src={item.icon} alt={item.name} title={item.name} />
            </div>
          ))}
        </motion.div>
      </MotionConfig>
    </div>
  );
};

export default TechStack;
