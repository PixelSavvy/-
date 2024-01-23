import { Link } from "react-router-dom";

import { Button } from "../ui";
import { PersonPen } from "@/assets/icons/icons";

const BecomeSellerButton = () => {
  const href =
    "https://x0uaod4rslo.typeform.com/ShtagonebaCV?fbclid=IwAR0fPrRQJ_U-Lb6pCCdg2NpfqLN-1j4hqGCMRJrpczp1FVDj1l4FyGCAQ0Q&typeform-source=l.facebook.com";

  return (
    <Button>
      <Link
        to={href}
        target="_blank"
        tabIndex={-1}
        className="flex items-center justify-between gap-2"
      >
        <PersonPen size={20} />
        <span>გახდი მწერალი</span>
      </Link>
    </Button>
  );
};

export default BecomeSellerButton;
