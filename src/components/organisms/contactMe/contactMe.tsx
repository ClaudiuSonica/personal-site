import "./contactMe.scss";
import Description from "../../atoms/description/description";
import PageTitle from "../../atoms/pageTitle/pageTitle";
import "./contactMe.scss";
import location from "/assets/location.png";
import mail from "/assets/mail.png";
import phone from "/assets/phone.png";
import ContactForm from "../../molecules/contactForm/contactForm";
import { ThemeContext } from "../../../utils/context/themeContext";
import { useContext } from "react";

const ContactMe = () => {

  const {theme} = useContext(ThemeContext); 

  return (
    <div className={`contact-wrapper ${theme}`}>
      <div className="contact-wrapper--header">
        <PageTitle title="Contact" />
        <Description
          className="description"
          text="Contact me for more! Let's take the next step together! 👇"
        />
      </div>
      <div className="contact-wrapper--content">
        <div className="contact-wrapper--content--details">
          <div>
            <img src={location} alt="location pointer" />
            <div>
              <p>Location</p>
              <p>Mures, Romania</p>
            </div>
          </div>
          <div>
            <img src={mail} alt="mail icon" />
            <div>
              <p>Email</p>
              <p>csonica95@gmail.com</p>
            </div>
          </div>
          <div>
            <img src={phone} alt="phone icon" />
            <div>
              <p>Phone</p>
              <p>(+40) 0749 964 480</p>
            </div>
          </div>
        </div>
      </div>
        <div className="contact-wrapper--content__form">
          <ContactForm />
        </div>
    </div>
  );
};

export default ContactMe;
