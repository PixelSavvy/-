import React from "react";
import { Books, Person, Presentation, Newspaper } from "@/assets/icons/icons";

interface ServicesCardIconProps {
  isFocused: boolean;
  id: number;
  color: string;
}

const ServicesCardIcon: React.FC<ServicesCardIconProps> = ({
  isFocused,
  id,
  color,
}) => {
  let icon = null;

  switch (id) {
    case 0:
      icon = <Newspaper size={30} />;
      break;
    case 1:
      icon = <Person size={30} />;
      break;
    case 2:
      icon = <Books size={30} />;
      break;
    case 3:
      icon = <Presentation size={30} />;
      break;
    default:
      icon = null;
  }

  return (
    <div
      className={`${color}  w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
        isFocused ? "text-secondary" : "text-background"
      }`}
    >
      {icon}
    </div>
  );
};

export default ServicesCardIcon;
