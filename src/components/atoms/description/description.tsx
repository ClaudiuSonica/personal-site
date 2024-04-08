import { useContext } from "react";
import { ThemeContext } from "../../../utils/context/themeContext";
import "./description.scss";

interface DescriptionProps {
  className?: string;
  text: string;
}

const Description: React.FC<DescriptionProps> = ({ className, text }) => {
  
  const {theme} = useContext(ThemeContext);

  return (
    <div className={`${className} ${theme}`}>
      <p>{text}</p>
    </div>
  )
}

export default Description;