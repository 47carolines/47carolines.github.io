import { SocialIcon } from "react-social-icons";
import { Stack } from "react-bootstrap";

interface ISocialIconsProps {
  className?: string;
}

const SocialIcons: React.FC<ISocialIconsProps> = ({ className }) => {
  const socialMedia = [
    {
      url: "https://www.linkedin.com/in/carolineslewis/",
    },
    {
      url: "https://github.com/47carolines",
    },
  ];

  return (
    <Stack gap={3} direction="horizontal" className={className}>
      {socialMedia.map((socialMedia, index) => (
        <SocialIcon
          key={index}
          bgColor="#ffffff"
          fgColor="#000000"
          target="_blank"
          url={socialMedia.url}
        />
      ))}
    </Stack>
  );
};

export default SocialIcons;
