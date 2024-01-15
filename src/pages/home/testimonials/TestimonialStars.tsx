import { Star } from "@/assets/icons/icons";

const TestimonialStars = ({ quantity }: { quantity: number }) => {
  const stars = Array.from({ length: quantity }, (_, index) => (
    <Star key={index} size={20} />
  ));

  return <div className="flex gap-1 text-primary">{stars}</div>;
};

export default TestimonialStars;
