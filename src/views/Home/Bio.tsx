import { Link } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";

const Bio = () => {
  return (
    <div className="mb-4">
      <p>
        Hello World! I have over 2 years of experience in software development
        and a true passion for writing clean and concise code.{" "}
      </p>
      <p>
        Currently employed as a software developer at Spirit of '76 Fireworks, I
        maintain and improve our internal tools and our wholesale fireworks
        website.
      </p>
      <p>
        As an entry level-developer, I am eager to learn, adapt, and grow in the
        ever-evolving world of software development.
      </p>
      <Link
        to="https://drive.google.com/file/d/1zxaWY8SogKzu_FYgUaEjfaFtLfSnmvIg/view"
        target="_blank"
      >
        Resume (PDF) <BiLinkExternal />
      </Link>
    </div>
  );
};

export default Bio;
