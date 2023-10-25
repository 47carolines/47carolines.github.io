import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./routes";
import "./App.scss";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="page_container">
        <Header />
        <main className="content d-flex justify-content-center align-items-center">
          <Routes />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
