import { Routes as ReactRoutes, Route } from "react-router-dom";
import About from "../views/About/About";
import Home from "../views/Home";
import Work from "../views/Work";
import Contact from "../views/Contact";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="work" element={<Work />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </ReactRoutes>
  );
};

export default Routes;
