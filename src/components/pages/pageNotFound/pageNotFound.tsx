import { useContext } from "react";
import { ThemeContext } from "../../../utils/context/themeContext";
import "./pageNotFound.scss";

const PageNotFound = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <div id="notfound" className={theme}>
      <div className="notfound">
        <div className="notfound-bg">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h1>oops!</h1>
        <h2>Error 404 : Page Not Found</h2>
        <a href="#home">Go Home</a>
      </div>
    </div>
  );
};

export default PageNotFound;