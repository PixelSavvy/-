const SectionHeading = ({
  heading,
  subheading,
  paragraph,
}: {
  heading: string | undefined;
  subheading?: string | undefined;
  paragraph?: string | undefined;
}) => {
  return (
    <div className="mb-6 space-y-3 text-center md:mb-8 lg:mb-10">
      {/* Subheading */}
      {subheading && (
        <div className="flex items-center justify-center gap-2">
          <div className="w-1 h-1 rounded-full md:w-2 md:h-2 bg-secondary" />
          <span className="tracking-widest font-tbc-caps-bld text-secondary">
            {subheading}
          </span>
          <div className="w-1 h-1 rounded-full md:w-2 md:h-2 bg-secondary" />
        </div>
      )}
      {/* Heading */}
      <div className="flex flex-col gap-4 place-items-center">
        <h2 className="font-bpg-boxo">{heading}</h2>
        <p className="max-w-2xl">{paragraph}</p>
      </div>
    </div>
  );
};

export default SectionHeading;
