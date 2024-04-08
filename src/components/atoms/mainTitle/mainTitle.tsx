import { useContext } from "react";
import { ThemeContext } from "../../../utils/context/themeContext";
import "./mainTitle.scss"

const MainTitle = () => {

  const {theme} = useContext(ThemeContext);

  return (
    <div className={`main-title ${theme}`}>
      <h1>Front-End Developer <span>🚀</span></h1>
    </div>
  );
}

export default MainTitle;