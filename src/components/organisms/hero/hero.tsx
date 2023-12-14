import Description from "../../atoms/description/description";
import HeroImg from "../../atoms/heroImg/heroImg";
import MainTitle from "../../atoms/mainTitle/mainTitle";
import Socials from "../../atoms/socials/socials";
import TechStack from "../../atoms/techStack/techStack";
import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero--section">
        <div className="hero--section__main">
          <div className="hero--section__details">
            <MainTitle />
            <Description
              className="description"
              text="Hello. I'm Claudiu Sonica. An self-taught ambitious Front-End Developer based in Mures, Romania. 📌"
            />
            <Socials />
          </div>
          <div className="hero--section__img">
            <HeroImg />
          </div>
        </div>
        <TechStack />
      </div>
    </section>
  );
};

export default Hero;
