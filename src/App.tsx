import PageNotFound from "./components/pages/pageNotFound/pageNotFound";
import Projects from "./components/pages/projects/projects";
import Header from "./components/organisms/header/header";
import Contact from "./components/pages/contact/contact";
import Footer from "./components/organisms/footer/footer";
import About from "./components/pages/about/about";
import Home from "./components/pages/home/home";

import {
  ThemeContext,
} from "./utils/context/themeContext";

import { useContext, useEffect, useState } from "react";

import { BrowserRouter } from "react-router-dom";
import Extra from "./components/molecules/extra/extra";

const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash);

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const pathNames = ["", "#home", "#about", "#projects", "#contact"];

  return (
    <>
      <BrowserRouter>
        <div className={`main--content ${theme}`}>
          {pathNames.includes(currentPath) ? (
            <>
              <Header />
              <Home />
              <About />
              <Projects />
              <Contact />
              <Footer />
              <Extra />
            </>
          ) : (
            <PageNotFound />
          )}
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
