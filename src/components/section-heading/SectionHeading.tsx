const SectionHeading = ({
  heading,
  subheading,
}: {
  heading: string | undefined;
  subheading?: string | undefined;
}) => {
  return (
    <div className="mb-10 space-y-3 text-center md:mb-14 lg:mb-16 xl:mb-20">
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
      <h2 className="font-bpg-boxo">{heading}</h2>
    </div>
  );
};

export default SectionHeading;
