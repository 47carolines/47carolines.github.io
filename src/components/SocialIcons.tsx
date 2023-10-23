import { SocialIcon } from "react-social-icons";
import { Stack } from "react-bootstrap";

const SocialIcons = () => {
  const links = [
    "https://www.linkedin.com/in/carolineslewis/",
    "https://github.com/47carolines",
  ];

  return (
    <Stack gap={3} direction="horizontal">
      {links.map((link, index) => (
        <SocialIcon key={index} target="_blank" url={link} />
      ))}
    </Stack>
  );
};

export default SocialIcons;
