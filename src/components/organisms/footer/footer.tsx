import { useContext, useState } from "react";
import "./footer.scss";
import Logo from "../../atoms/logo/logo";
import { ThemeContext } from "../../../utils/context/themeContext";

const Footer = () => {
  const [year] = useState(new Date().getFullYear());

  const {theme} = useContext(ThemeContext);

  return (
    <footer className={`footer ${theme}`}>
      <div className="footer__content">
        <div className="footer__text">
          <span className="footer__text--logo">
            <Logo />
          </span>
          <span className="footer__text--details">&copy; {year} All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
