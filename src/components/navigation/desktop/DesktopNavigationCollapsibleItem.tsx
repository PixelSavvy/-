import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui";
import { sideMenuNavigationLinksTypes } from "@/types";
import { ChevronDown } from "@/assets/icons/icons";
import { NavLink } from "react-router-dom";
import useContentful from "@/hooks/useContentful";
import { useState } from "react";

interface DesktopNavigationCollapsibleItemProps {
  label: string;
}

const DesktopNavigationCollapsibleItem: React.FC<
  DesktopNavigationCollapsibleItemProps
> = ({ label }) => {
  const [sideMenuNavigationLinks, setSideMenuNavigationLinks] = useState<
    sideMenuNavigationLinksTypes[]
  >([]);

  const query = "servicePage";
  const setStateFunction = setSideMenuNavigationLinks;

  const {} = useContentful({ query, setStateFunction });

  const sideMenuNavigationLinksData = sideMenuNavigationLinks.map((link) => {
    return {
      label: link.serviceTitle,
      path: link.serviceId,
      collapsed: false,
    };
  });

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
        {sideMenuNavigationLinksData &&
          sideMenuNavigationLinksData.map((link) => (
            <DropdownMenuItem
              className="w-full text-base hover:text-secondary focus:text-secondary"
              key={link.label}
            >
              <NavLink to={`/servisebi/${link.path}`}>{link.label}</NavLink>
            </DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DesktopNavigationCollapsibleItem;
