import { Link } from "react-router-dom";

import useHref from "@/hooks/useHref";

import { Button } from "../ui";

interface SocialMediaButtonProps {
  icon: JSX.Element;
  mobileHref: string;
  desktopHref: string;
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
  icon,
  mobileHref,
  desktopHref,
}) => {
  const { href } = useHref(mobileHref, desktopHref);

  return (
    <Button size="icon">
      <Link to={href} target="_blank w-full h-full">
        {icon}
      </Link>
    </Button>
  );
};

export default SocialMediaButton;
