import { Link } from "react-router-dom";
import "./logo.scss";

export const Logo = () => {
  return (
    <Link to="/">
      <div className="logo">
        <span className="logo--name">soni</span>
        <span className="logo--symbol">X</span>
      </div>
    </Link>
  );
};

export default Logo;
