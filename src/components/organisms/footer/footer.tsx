import { useState } from "react";
import "./footer.scss";
import Logo from "../../atoms/logo/logo";

const Footer = () => {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__text">
          <span className="footer__text--logo">
            <Logo />
          </span>
          <span className="footer__text--details">&copy; {year} All rights reserved</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
