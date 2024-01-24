import Section from "../ui/section";
import UniversityLogo from "./UniversityLogo";

import { universityLogosData } from "@/data/universityLogosData";

const Universities = () => {
  return (
    <Section>
      <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6 place-items-center">
        {universityLogosData.map((logo, id) => (
          <UniversityLogo logo={logo} key={id} />
        ))}
      </ul>
    </Section>
  );
};

export default Universities;
