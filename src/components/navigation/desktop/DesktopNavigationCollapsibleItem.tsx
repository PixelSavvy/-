import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui";
import { navigationLinksTypes } from "@/types";
import { ChevronDown } from "@/assets/icons/icons";
import { NavLink } from "react-router-dom";

interface DesktopNavigationCollapsibleItemProps {
  label: string;
  sublinks: navigationLinksTypes[] | undefined;
}

const DesktopNavigationCollapsibleItem: React.FC<
  DesktopNavigationCollapsibleItemProps
> = ({ label, sublinks }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center justify-between gap-2 px-4 py-2 transition-colors rounded-sm hover:bg-accent focus:bg-accent hover:text-secondary focus:text-secondary">
        <span>{label}</span>
        <ChevronDown size={20} className="data-[state=open]:rotate-180" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="px-6 py-4 space-y-4 border-none shadow-xl "
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        {sublinks &&
          sublinks.map((sublink) => (
            <DropdownMenuItem className="w-full text-base hover:text-secondary focus:text-secondary">
              <NavLink to={sublink.to}>{sublink.label}</NavLink>
            </DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DesktopNavigationCollapsibleItem;
