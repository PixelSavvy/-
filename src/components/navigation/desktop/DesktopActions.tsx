import { PersonPen } from "@/assets/icons/icons";
import { Button } from "@/components/ui";
import { Link } from "react-router-dom";

const DesktopActions = () => {
  return (
    <div className="flex items-center justify-between gap-4">
      <Link to="/" target="_blank" tabIndex={-1}>
        <Button>
          <PersonPen size={20} className="mr-2" />
          გახდი მწერალი
        </Button>
      </Link>
      <Link to="/" target="_blank" tabIndex={-1}>
        <Button className="bg-danger text-background focus:bg-danger/90 hover:bg-danger/90">
          შეუკვეთე ახლავე
        </Button>
      </Link>
    </div>
  );
};

export default DesktopActions;
