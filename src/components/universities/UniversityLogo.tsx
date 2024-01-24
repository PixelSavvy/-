interface UniversityLogoProps {
  logo: {
    url: string;
    alt: string;
  };
}

const UniversityLogo: React.FC<UniversityLogoProps> = ({ logo }) => {
  return (
    <li className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
      <img
        src={logo.url}
        alt={logo.alt}
        className="object-contain w-full h-full aspect-square"
        loading="lazy"
      />
    </li>
  );
};

export default UniversityLogo;
