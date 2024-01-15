import { useState } from "react";
import useContentful from "@/hooks/useContentful";

import Section from "@/components/ui/section";
import AboutAdvantagesItem from "./AboutAdvantagesItem";
import AboutAdvantagesItemImage from "./AboutAdvantagesItemImage";

import { aboutAdvantagesDataTypes } from "@/types/aboutAdvantagesDataTypes";

import styles from "./AboutAdvantages.module.css";

const AboutAdvantages = () => {
  const [aboutAdvantagesData, setAboutAdvantagesData] = useState<
    aboutAdvantagesDataTypes[]
  >([]);
  const query = "advantages";
  const setStateFunction = setAboutAdvantagesData;

  const {} = useContentful<aboutAdvantagesDataTypes[]>({
    query,
    setStateFunction,
  });

  const className = `${styles.bleed} bg-muted py-10 md:py-14 lg:py-16 xl:py-20`;

  return (
    <Section className={className}>
      <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-3">
        <AboutAdvantagesItemImage
          title="თქვენი წარმატება"
          src="https://ik.imagekit.io/dcpowg7vx/Shtagoneba/about/about-img-1.jpg"
        />
        {aboutAdvantagesData.map((advantage, id) => (
          <AboutAdvantagesItem
            advantage={advantage}
            id={id}
            key={advantage.advantagesTitle}
          />
        ))}
        <AboutAdvantagesItemImage
          title="ჩვენი მიზანია"
          src="https://ik.imagekit.io/dcpowg7vx/Shtagoneba/about/about-img-2.jpg"
        />
      </ul>
    </Section>
  );
};

export default AboutAdvantages;
