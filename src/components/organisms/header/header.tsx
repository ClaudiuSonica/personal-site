import Logo from "../../atoms/logo/logo";
import Navbar from "../../molecules/navbar/navbar";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
