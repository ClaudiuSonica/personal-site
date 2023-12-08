import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/organisms/header/header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  );
};

export default App;
