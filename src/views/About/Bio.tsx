import { Link } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";

const Bio = () => {
  return (
    <>
      <h3 className="header">About Me</h3>
      <p>
        I have over 2 years of experience in software development and a true
        passion for writing clean and concise code. Currently employed as a
        software developer at Spirit of '76 Fireworks, I maintain and improve
        our internal tools and our wholesale fireworks website. I specialize in
        full-stack web development and work with up-to-date frameworks like
        ReactJS and Laravel. Our team utilizes the Agile development approach
        and works with modern DevOps tools like Docker, Jira, and Jenkins.
      </p>
      <Link
        to="https://drive.google.com/file/d/1zxaWY8SogKzu_FYgUaEjfaFtLfSnmvIg/view"
        target="_blank"
      >
        Resume (PDF) <BiLinkExternal />
      </Link>
    </>
  );
};

export default Bio;
