import OrderButton from "../buttons/OrderButton";
import LearnMoreButton from "../buttons/LearnMoreButton";

const HeroButtons = () => {
  return (
    <div className="flex flex-col gap-4 mt-10 place-items-center sm:flex-row sm:justify-center md:justify-start">
      <OrderButton
        label="შეუკვეთე"
        className="w-full sm:w-fit bg-secondary hover:bg-secondary/90 focus-within:bg-secondary/90 text-background"
      />

      <LearnMoreButton
        className="bg-transparent border-2 border-transparent hover:text-secondary focus-within:text-secondary hover:border-secondary"
        label="წაიკითხე მეტი"
      />
    </div>
  );
};

export default HeroButtons;
