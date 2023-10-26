import Card from "react-bootstrap/Card";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

interface IProject {
  name: string;
  image: string;
  repo: string;
  description: string;
  url: string;
}

interface IProjectProps {
  project: IProject;
}

const Project: React.FC<IProjectProps> = ({ project }) => {
  return (
    <Link to={project.url} target="_blank">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`/images/${project.image}.png`} />
        <Card.Body>
          <Card.Title className="no-link-style">{project.name}</Card.Title>
          <Card.Text className="no-link-style">{project.description}</Card.Text>
          <SocialIcon target="_blank" url={project.repo}></SocialIcon>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Project;
