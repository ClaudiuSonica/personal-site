import { useContext } from "react";
import { ThemeContext } from "../../../utils/context/themeContext";
import "./heroImg.scss";

const HeroImg = () => {

  const {theme} = useContext(ThemeContext);

  return (
    <div className={`blob ${theme}`}>
      <img src="/assets/profile.jpeg" alt="profile picture" className="blob-img" />
    </div>
  );
};

export default HeroImg;
