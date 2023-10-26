import { Link } from "react-router-dom";
const Contact: React.FC = () => {
  return (
    <div className="mx-2">
      <h3 className="heading">Contact</h3>
      <p>Feel free to reach out to me through the following methods:</p>

      <ul>
        <li>
          Email:{" "}
          <Link to="mailto:47carolines@gmail.com">47carolines@gmail.com</Link>
        </li>
        <li>
          LinkedIn:{" "}
          <Link target="_blank" to="//www.linkedin.com/in/carolineslewis/">
            https://www.linkedin.com/in/carolineslewis/
          </Link>
        </li>
      </ul>
      <p>
        I'm excited to hear from you and discuss potential opportunities or
        collaborations!
      </p>
    </div>
  );
};

export default Contact;
