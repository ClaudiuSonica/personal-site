import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header  from "./components/organisms/header/header";
import Hero from "./components/organisms/hero/hero";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Header />} />
          <Route path="/home" element={<Hero />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
