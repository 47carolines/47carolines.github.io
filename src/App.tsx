import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./routes";
import "./App.scss";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="content page_container">
        <Routes />
      </main>
      <Footer />
    </>
  );
};

export default App;
