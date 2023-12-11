import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header  from "./components/organisms/header/header";
import Hero from "./components/organisms/hero/hero";
import AboutMe from "./components/organisms/aboutMe/aboutMe";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Hero />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
