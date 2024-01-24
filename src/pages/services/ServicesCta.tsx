import Section from "@/components/ui/section";

import styles from "./ServicesCta.module.css";

import OrderButton from "@/components/buttons/OrderButton";

const ServicesCta = () => {
  return (
    <Section
      className={`${styles.bleed} bg-muted py-16 md:py-24 text-center flex flex-col place-items-center`}
    >
      <h2 className="max-w-4xl">
        შთაგონება - შენი მარტივი სტუდენტური ცხოვრებისთვის!
      </h2>
      <p className="max-w-2xl mb-16">
        მოგვწერე ახლავე და დაასრულე სწავლა! შთაგონების პროფესიონალური გუნდი
        თავიდან აგაცილებს ყველა აკადემიურ პრობლემას.
      </p>
      <OrderButton
        className="bg-danger text-background hover:bg-danger/90 focus-within:bg-danger/90"
        label="მოგვწერე ახლავე"
      />
    </Section>
  );
};

export default ServicesCta;
