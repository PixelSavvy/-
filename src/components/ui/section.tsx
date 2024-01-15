import { cn } from "@/lib/utils";

const Section = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <section
      className={cn("w-full my-10 md:my-16 lg:my-20 xl:my-24", className)}
      {...props}
    >
      {props.children}
    </section>
  );
};

export default Section;
