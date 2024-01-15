import { Link } from "react-router-dom";
import { m } from "framer-motion";

import { Button } from "@/components/ui/button";

import { mobileMenuItemVariants } from "@/animation/variants/mobileMenuVariants";

const MobileMenuAction = () => {
  return (
    <li className="w-full mt-16 overflow-hidden ">
      <m.div variants={mobileMenuItemVariants} className="w-full ">
        <Link to="/">
          <Button
            className="w-full text-lg text-background bg-secondary hover:bg-secondary/90 sm:w-max"
            size="lg"
          >
            შეუკვეთე
          </Button>
        </Link>
      </m.div>
    </li>
  );
};

export default MobileMenuAction;
