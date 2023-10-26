import { Routes as ReactRoutes, Route } from "react-router-dom";
import Home from "../views/Home";
import Work from "../views/Work";
import Contact from "../views/Contact";
import Experience from "../views/Experience";
import Archive from "../views/Work/Archive";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route index element={<Home />} />
      <Route path="experience" element={<Experience />} />
      <Route path="work" element={<Work />} />
      <Route path="contact" element={<Contact />} />
      <Route path="archive" element={<Archive />} />
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </ReactRoutes>
  );
};

export default Routes;
