import { cn } from "@/lib/utils";

const Section = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <section
      className={cn("w-full my-12 md:my-20 lg:my-24 xl:my-32", className)}
      {...props}
    >
      {props.children}
    </section>
  );
};

export default Section;
