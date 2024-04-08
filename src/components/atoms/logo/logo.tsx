import { useContext } from "react";
import { ThemeContext } from "../../../utils/context/themeContext";
import "./logo.scss";

export const Logo = () => {

  const {theme} = useContext(ThemeContext);

  return (
    <a href="#home">
      <div className={`logo ${theme}`}>
        <span className="logo--name">soni</span>
        <span className="logo--symbol">X</span>
      </div>
    </a>
  );
};

export default Logo;
