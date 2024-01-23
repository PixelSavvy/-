import { Link } from "react-router-dom";

import useHref from "@/hooks/useHref";

import { Button } from "../ui";
import { ChevronRight } from "@/assets/icons/icons";

interface LearnMoreButtonProps {
  label: string;
  className: string;
}

const LearnMoreButton: React.FC<LearnMoreButtonProps> = ({
  label,
  className,
}) => {
  const mobileHref = "https://www.facebook.com/105974154577392";

  const desktopHref = "fb://profile/105974154577392";

  const { href } = useHref(mobileHref, desktopHref);

  const classes = `${className} group`;

  return (
    <Button className={classes}>
      <Link
        to={href}
        target="_blank"
        tabIndex={-1}
        className="flex items-center justify-start gap-1 transition-all group-hover:gap-2 group-focus-within:gap-2 "
      >
        <span>{label}</span>
        <ChevronRight size={20} />
      </Link>
    </Button>
  );
};

export default LearnMoreButton;
