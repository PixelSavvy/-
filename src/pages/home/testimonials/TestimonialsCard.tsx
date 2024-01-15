import { testimonialsDataTypes } from "@/types/testimonialsDataTypes";
import TestimonialStars from "./TestimonialStars";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui";

interface TestimonialsCardProps {
  testimonial: testimonialsDataTypes;
}

const TestimonialsCard: React.FC<TestimonialsCardProps> = ({ testimonial }) => {
  const avatarSrc = testimonial.testimonialAvatar?.fields?.file?.url || "";

  return (
    <Card className="flex flex-col gap-6 p-6 border-none shadow-lg lg:p-8 rounded-xl bg-background place-content-center">
      <CardHeader className="flex-row gap-4 p-0 space-y-0 place-content-center ">
        <Avatar className="w-16 h-16 ">
          <AvatarImage src={avatarSrc} alt={testimonial.testimonialName} />
          <AvatarFallback>{testimonial.testimonialName}</AvatarFallback>
        </Avatar>

        <div className="flex flex-col items-start justify-center gap-1 sm:gap-2 ">
          <span className="font-tbc-caps-bld text-secondary large">
            {testimonial.testimonialName}
          </span>
          <span className="font-tbc-caps-md small ">
            {testimonial.testimonialOccupation}
          </span>
          <TestimonialStars quantity={5} />
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <p className="max-w-lg text-center">
          {testimonial.testimonialFeedback}
        </p>
      </CardContent>
    </Card>
  );
};

export default TestimonialsCard;
