import { TypeAnimation } from "react-type-animation";

const HeroHeading = () => {
  const typeAnimationProps = {
    sequence: [
      "საუნივერსიტეტო ნაშრომის",
      2000,
      "საბაკალავრო ნაშრომის",
      2000,
      "სამაგისტრო ნაშრომის",
      2000,
      "ესეს",
      2000,
      "რეფერატის",
      2000,
      "პრეზენტაციის",
      2000,
    ],

    style: {
      backgroundColor: "white",
      padding: "8px",
      borderRadius: "12px",
    },
  };

  return (
    <h1 className="flex flex-col items-center justify-between gap-4 md:items-start mb:4 md:mb-6">
      <span>ნებისმიერი</span>
      <div>
        <TypeAnimation
          sequence={typeAnimationProps.sequence}
          wrapper="span"
          repeat={Infinity}
          cursor={true}
          preRenderFirstString={true}
          style={typeAnimationProps.style}
        />
      </div>

      <span>შესრულება 24/7-ზე</span>
    </h1>
  );
};

export default HeroHeading;
