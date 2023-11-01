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
        Currently employed as a software developer for a Midwestern wholesaler, I
        maintain and improve our customer-facing wholesale websites. I also work on internal applications that are used by our warehouse team as well as our office staff.
      </p>
      <p>
        I am eager to learn, adapt, and grow in the
        ever-evolving world of software development. Check out my resume and the rest of my portfolio site to learn more about me.
      </p>
      <Link
        to="//drive.google.com/file/d/1VUxcZnLuACYdXY7IMMVtF-fXjv6X5EyB/view?usp=sharing"
        target="_blank"
      >
        Resume (PDF) <BiLinkExternal />
      </Link>
    </div>
  );
};

export default Bio;
