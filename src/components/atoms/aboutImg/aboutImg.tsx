import { useContext } from "react";
import { ThemeContext } from "../../../utils/context/themeContext";
import "./aboutImg.scss";

const AboutImg = () => {

  const {theme} = useContext(ThemeContext);

  return (
    <div className={`about-img ${theme}`}>
      <img src="/assets/about.jpg" alt="pc build for software development" />
      <div className="circle-text">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path
            id="circlePath"
            fill="none"
            strokeWidth="4"
            d="
          M 10, 50
          a 40,40 0 1,1 80,0
          a 40,40 0 1,1 -80,0
        "
          />
          <text
            id="text"
            fontFamily="monospace"
            fontSize="12"
            fontWeight="bold"
            fill="$000">
            <textPath id="textPath" href="#circlePath">FRONT-END WEB DEVELOPMENT </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default AboutImg;
