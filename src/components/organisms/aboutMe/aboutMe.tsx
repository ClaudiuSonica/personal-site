import AboutDescription from "../../atoms/aboutDescription/aboutDescription";
import AboutImg from "../../atoms/aboutImg/aboutImg";
import Description from "../../atoms/description/description";
import PageTitle from "../../atoms/pageTitle/pageTitle";
import "./aboutMe.scss";

const AboutMe = () => {
  return (
    <section className="about--section">
      <div className="about--section__wrapper">
        <div className="about--section__img">
          <AboutImg />
        </div>
        <div className="about--section__details">
          <PageTitle title="About Me" />
          <Description
            className="aboutMe-description"
            text="Hello. I'm Claudiu Sonica. A self-taught ambitious Front-End Developer based in Mures, Romania. 📌"
          />
          <AboutDescription />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
