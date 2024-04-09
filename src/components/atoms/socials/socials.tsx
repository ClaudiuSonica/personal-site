import { useContext } from "react";
import { socials } from "../../../data/socials";
import { ThemeContext } from "../../../utils/context/themeContext";
import "./socials.scss";

const Socials = () => {
  const { socialLinks } = socials;

  const {theme} = useContext(ThemeContext);

  return (
    <div className={`socials ${theme}`}>
      {socialLinks.map((social) => (
        <a key={social.id} href={social.link} target="_blank" rel="noreferrer">
          <img src={social.icon} alt={social.name} />
        </a>
      ))}
    </div>
  );
};

export default Socials;