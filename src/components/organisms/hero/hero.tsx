import Description from "../../atoms/description/description";
import MainTitle from "../../atoms/mainTitle/mainTitle";
import Socials from "../../atoms/socials/socials";
import TechStack from "../../atoms/techStack/techStack";
import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero--details">
        <MainTitle />
        <Description />
        <Socials />
      </div>
      <div className="hero--stack">
        <TechStack />
      </div>
    </section>
  )
};

export default Hero;