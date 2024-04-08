import { useContext } from "react";
import { ThemeContext } from "../../../utils/context/themeContext";
import "./aboutDescription.scss";

const AboutDescription = () => {

  const {theme} = useContext(ThemeContext);

  return (
    <div className={`about-description ${theme}`}>
      <p>
        As a versatile Front End Developer proficient in JavaScript, React,
        TypeScript, SCSS, and Tailwind, I bring a passion for crafting engaging
        user interfaces and a commitment to clean, efficient code. Recently, I
        have expanded my skill set to include PHP, Laravel, and MySQL, further
        enhancing my ability to deliver comprehensive, end-to-end web solutions.
        With a solid foundation in both modern front-end technologies and robust
        back-end systems, I eagerly contribute innovative solutions while
        continually expanding my skills. My goal is to deliver dynamic,
        responsive, and data-driven web experiences that meet the needs of users
        and clients alike.
      </p>
    </div>
  );
};

export default AboutDescription;
