import { navLinks } from "../../../data/navLinks";
import NavLink from "../../atoms/navLink/navLink";
import "./navbar.scss";

export const Navbar = () => {
  const { links } = navLinks;

  return (
    <nav className="navbar">
      {links.map((link) => (
        <NavLink key={link.id} link={link.link} name={link.name} />
      ))}
    </nav>
  );
};

export default Navbar;
