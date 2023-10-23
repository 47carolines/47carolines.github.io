import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./routes";
import "./App.scss";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes />
    </>
  );
};

export default App;
