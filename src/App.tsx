import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
