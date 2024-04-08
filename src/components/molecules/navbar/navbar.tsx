import { useContext } from "react";
import { navLinks } from "../../../data/navLinks";
import NavLink from "../../atoms/navLink/navLink";
import "./navbar.scss";
import { ThemeContext } from "../../../utils/context/themeContext";

export const Navbar = () => {
  const { links } = navLinks;

  const {theme} = useContext(ThemeContext);

  return (
    <nav className={`navbar ${theme}`}>
      {links.map((link) => (
        <NavLink key={link.id} link={link.link} name={link.name} />
      ))}
    </nav>
  );
};

export default Navbar;
