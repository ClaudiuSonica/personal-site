import { useContext } from "react";
import { ThemeContext } from "../../../utils/context/themeContext";
import "./pageTitle.scss";

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {

  const {theme} = useContext(ThemeContext);

  return (
    <div className={`page-title ${theme}`}>
      <h2>{title}</h2>
    </div>
  );
};

export default PageTitle;
