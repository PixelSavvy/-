import useScreenSize from "@/hooks/useScreenSize";

import Section from "../ui/section";
import HeroHeading from "./HeroHeading";
import HeroButtons from "./HeroButtons";

import setHeroBg from "@/lib/setHeroBg";

interface HeroProps {
  url: string;
}

const Hero: React.FC<HeroProps> = ({ url }) => {
  const { isLargeScreen } = useScreenSize();

  const heroBg = setHeroBg(url);
  const src = heroBg.heroBg;

  const sectionStyles = isLargeScreen
    ? {
        backgroundImage: `url(https://ik.imagekit.io/dcpowg7vx/Shtagoneba/Vector.svg), url(${src})`,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "bottom, 105% 90%",
        backgroundSize: "calc(100% + 1dvw), 40%",
      }
    : {
        backgroundImage: `url(https://ik.imagekit.io/dcpowg7vx/Shtagoneba/Vector.svg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "calc(100% + 1dvw)",
      };

  return (
    <Section
      className="relative mt-10 md:mt-12 lg:mt-14 xl:mt-16 rounded-xl bg-primary lg:pr-4"
      style={sectionStyles}
    >
      {/* Hero content */}
      <div className="px-6 pt-10 pb-16 text-center md:px-10 lg:px-14 xl:px-20 md:pt-16 lg:pt-20 xl:pt-24 2xl:pt-30 md:text-start md:pb-16 lg:pb-32 xl:pb-48 2xl:pb-64 ">
        <HeroHeading />
        <p className=" md:max-w-md lg:max-w-lg xl:max-w-xl mb:8 md:mb-10 lg:mb-12">
          განათავსე შეკვეთა და მიიღე პროფესიონალურად შესრულებული ნაშრომი
          მინიმალური ძალისხმევით, უმოკლეს დროში
        </p>
        <HeroButtons />
      </div>
    </Section>
  );
};

export default Hero;
