import { socials } from "../../../data/socials";
import "./socials.scss";

const Socials = () => {
  const { socialLinks } = socials;

  return (
    <div className="socials">
      {socialLinks.map((social) => (
        <a key={social.id} href={social.link} target="_blank" rel="noreferrer">
          <img src={social.icon} alt={social.name} />
        </a>
      ))}
    </div>
  );
};

export default Socials;