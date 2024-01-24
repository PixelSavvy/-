import { Link } from "react-router-dom";

import { Button } from "../ui";
import { ArrowRight } from "@/assets/icons/icons";

interface ServicesButtonProps {
  isFocused: boolean;
  href: string;
}

const ServicesButton: React.FC<ServicesButtonProps> = ({ isFocused, href }) => {
  return (
    <Button
      variant={"link"}
      size={"icon"}
      className={`mt-10 md:mt-12 lg:mt-14 w-10 h-10 rounded-full group-hover:bg-background group-hover:text-secondary transition-all ${
        isFocused
          ? "text-secondary bg-background"
          : "bg-secondary text-background"
      }`}
    >
      <Link to={href} tabIndex={-1}>
        <ArrowRight size={20} />
      </Link>
    </Button>
  );
};

export default ServicesButton;
