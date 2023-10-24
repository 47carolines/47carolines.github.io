import Card from "react-bootstrap/Card";
import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";

const WorkHistory = () => {
  return (
    <>
      <h3 className="header">Work History</h3>
      <Card>
        <Card.Body>
          <Card.Title>
            <Link target="_blank" className="no-link-style" to="https://shop.76fireworks.com/">
              Spirit of '76 Fireworks <BiLinkExternal />
            </Link>
          </Card.Title>
          <Card.Text>
            Entry Level Software Developer (Dec 2022 - Present)
          </Card.Text>
          <Card.Text>
            Software Development Intern (May 2021 - Dec 2022)
          </Card.Text>
          <Card.Text>
            <ul>
              <li>
                Full-stack web development for our internal applications and
                website.
              </li>
              <li>
                Using React and Laravel to maintain and improve our codebase.
              </li>
              <li>Designing and maintaining database tables using MySQL.</li>
              <li>Working on a team that utilizes Agile Scrum development.</li>
              <li>Using DevOps tools including Docker, GitHub, and Jenkins.</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default WorkHistory;
