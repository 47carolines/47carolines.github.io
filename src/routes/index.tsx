import { Routes as ReactRoutes, Route } from "react-router-dom";
import About from "../views/About";
import Experience from "../views/Experience";
import Home from "../views/Home";
import Work from "../views/Work";
import Contact from "../views/Contact";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="experience" element={<Experience />} />
      <Route path="work" element={<Work />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </ReactRoutes>
  );
};

export default Routes;
