import { Link } from "react-router-dom";

import { Button } from "../ui";
import { ChevronRight } from "@/assets/icons/icons";

const HeroButtons = () => {
  return (
    <div className="space-x-4">
      <Link to={"/"} target="_blank" tabIndex={-1}>
        <Button variant={"secondary"} className="text-background" size={"lg"}>
          შეუკვეთე
        </Button>
      </Link>

      <Link
        to={"/"}
        target="_blank"
        tabIndex={-1}
        className="group hover:text-secondary"
      >
        <Button
          className="bg-transparent border-2 border-transparent group-hover:text-secondary group-focus-within:text-secondary group-hover:border-secondary"
          size={"lg"}
        >
          წაიკითხე მეტი
          <ChevronRight
            size={20}
            className="ml-1 transition-all group-hover:ml-2 group-focus-within:ml-2 "
          />
        </Button>
      </Link>
    </div>
  );
};

export default HeroButtons;
