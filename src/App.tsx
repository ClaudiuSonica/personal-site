import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/organisms/header/header";
import Home from "./components/pages/home/home";
import About from "./components/pages/about/about";
import Projects from "./components/pages/projects/projects";
import Contact from "./components/pages/contact/contact";
import PageNotFound from "./components/pages/pageNotFound/pageNotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
