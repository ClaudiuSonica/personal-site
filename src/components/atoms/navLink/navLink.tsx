import "./navLink.scss";

interface NavLinkProps {
  link: string;
  name: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ link, name }) => {
  return (
    <ul>
      <li>
        <a href={link}>{name}</a>
      </li>
    </ul>
  );
};

export default NavLink;
