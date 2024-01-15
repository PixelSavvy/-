import { useState } from "react";
import useContentful from "@/hooks/useContentful";

import Section from "@/components/ui/section";
import TestimonialsCard from "./TestimonialsCard";
import SectionHeading from "@/components/section-heading/SectionHeading";

import { testimonialsDataTypes } from "@/types/testimonialsDataTypes";

import styles from "./Testimonials.module.css";

const Testimonials = () => {
  const [testimonialsData, setTestimonialsData] = useState<
    testimonialsDataTypes[]
  >([]);

  const query = "testimonials";
  const setStateFunction = setTestimonialsData;

  const {} = useContentful<testimonialsDataTypes[]>({
    query,
    setStateFunction,
  });

  return (
    <Section
      className={`${styles.bleed} bg-muted pt-6 pb-10 md:pt-8 md:pb-16 lg:pt-10 lg:pb-20 `}
    >
      <SectionHeading heading="რას ამბობენ მომხმარებლები ჩვენ შესახებ" />
      <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {testimonialsData.map((testimonial, id) => (
          <TestimonialsCard key={id} testimonial={testimonial} />
        ))}
      </ul>
    </Section>
  );
};

export default Testimonials;
