import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header  from "./components/organisms/header/header";
import Hero from "./components/organisms/hero/hero";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
