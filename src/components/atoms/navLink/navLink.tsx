import { Link } from "react-router-dom";
import "./navLink.scss";

interface NavLinkProps {
  link: string;
  name: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ link, name }) => {
  return (
    <ul>
      <li>
        <Link to={link}>{name}</Link>
      </li>
    </ul>
  );
};

export default NavLink;
