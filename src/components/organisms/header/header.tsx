import { useContext } from "react";
import { ThemeContext } from "../../../utils/context/themeContext";
import Logo from "../../atoms/logo/logo";
import Navbar from "../../molecules/navbar/navbar";
import "./header.scss";

const Header = () => {

  const {theme} = useContext(ThemeContext);

  return (
    <header className={`header ${theme}`}>
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
