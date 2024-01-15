import { Brain, Headphones, PersonChecked, Shield } from "@/assets/icons/icons";

import { aboutAdvantagesDataTypes } from "@/types/aboutAdvantagesDataTypes";

interface AboutAdvantagesItemProps {
  advantage: aboutAdvantagesDataTypes;
  id: number;
}

const AboutAdvantagesItem: React.FC<AboutAdvantagesItemProps> = ({
  advantage,
  id,
}) => {
  let icon = null;

  switch (id) {
    case 0:
      icon = <Shield size={20} />;
      break;
    case 1:
      icon = <PersonChecked size={20} />;
      break;
    case 2:
      icon = <Headphones size={20} />;
      break;
    case 3:
      icon = <Brain size={20} />;
      break;
    default:
      icon = null;
  }

  return (
    <li className="px-4 py-6 bg-primary even:bg-secondary even:text-background group rounded-xl">
      <div>
        <div className="flex items-center justify-start gap-4">
          <div className="flex p-2 rounded-full bg-background group-even:text-secondary text-primary">
            {icon}
          </div>
          <h3 className="text-base">{advantage.advantagesTitle}</h3>
        </div>
        <p>{advantage.advantagesDescription}</p>
      </div>
    </li>
  );
};

export default AboutAdvantagesItem;
