import { useState } from "react";
import useContentful from "@/hooks/useContentful";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Section from "@/components/ui/section";
import SectionHeading from "@/components/section-heading/SectionHeading";

import { faqDataTypes } from "@/types/faqDataTypes";

const Faq = () => {
  const [faqData, setFaqData] = useState<faqDataTypes[]>([]);

  const query = "faq";
  const setStateFunction = setFaqData;

  const {} = useContentful<faqDataTypes[]>({
    query,
    setStateFunction,
  });

  return (
    <Section>
      <SectionHeading heading="ხშირად დასმული კითხვები" subheading="F.A.Q." />
      {faqData.map((faq) => (
        <Accordion
          key={faq.faqQuestion}
          type="single"
          collapsible
          className="max-w-3xl mx-auto rounded-xl"
        >
          <AccordionItem
            value={`item-${faq.faqQuestion}`}
            className="mb-2 border-none rounded-xl"
          >
            <AccordionTrigger className="p-6 text-sm font-medium text-left sm:large font-tbc-caps-md bg-primary rounded-xl hover:no-underline hover:bg-primary/80 focus:bg-primary/80">
              {faq.faqQuestion}
            </AccordionTrigger>
            <AccordionContent className="p-6 leading-7 rounded-xl bg-muted/50">
              {faq.faqAnswer}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </Section>
  );
};

export default Faq;
