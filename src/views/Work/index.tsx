import { Link } from "react-router-dom";
import jsonData from "./data.json";
import Project from "./Project";

const Work = () => {
  return (
    <>
      <h3 className="heading">Work</h3>
      {jsonData.map((project) => (
        <Project project={project}/>
      ))}
      <Link to="/archive">View Full Project Archive</Link>
    </>
  );
};

export default Work;
