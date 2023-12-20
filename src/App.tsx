import { BrowserRouter } from "react-router-dom";
import Header from "./components/organisms/header/header";
import Home from "./components/pages/home/home";
import About from "./components/pages/about/about";
import Projects from "./components/pages/projects/projects";
import Contact from "./components/pages/contact/contact";
import { useEffect, useState } from "react";
import PageNotFound from "./components/pages/pageNotFound/pageNotFound";

const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const pathNames = ["#home", "#about", "#projects", "#contact"];

  return (
    <>
      <BrowserRouter>
        <div className="main--content">
          {pathNames.includes(currentPath) ? (
            <>
              <Header />
              <Home />
              <About />
              <Projects />
              <Contact />
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
