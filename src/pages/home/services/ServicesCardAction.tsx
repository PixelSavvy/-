import { Link } from "react-router-dom";
import useHref from "@/hooks/useHref";
import { Button } from "@/components/ui";
import { ArrowRight } from "@/assets/icons/icons";
import { shtagonebaFacebookHref } from "@/data/consts";

const ServicesCardAction = ({ isFocused }: { isFocused: boolean }) => {
  const { mobileHref, desktopHref } = shtagonebaFacebookHref;

  const { href } = useHref(mobileHref, desktopHref);

  return (
    <Link to={href} tabIndex={-1} target="_blank" className="mb-8">
      <Button
        variant={"link"}
        size={"icon"}
        className={` mt-6 md:mt-8 lg:mt-10  w-10 h-10 rounded-full group-hover:bg-background group-hover:text-secondary transition-all ${
          isFocused
            ? "text-secondary bg-background"
            : "bg-secondary text-background"
        }`}
      >
        <ArrowRight size={20} />
      </Button>
    </Link>
  );
};

export default ServicesCardAction;
