interface AboutAdvantagesItemImageProps {
  title: string;
  src: string;
}

const AboutAdvantagesItemImage: React.FC<AboutAdvantagesItemImageProps> = ({
  title,
  src,
}) => {
  return (
    <div className="relative w-full h-full">
      <div className="w-full h-full">
        <img
          src={src}
          alt={title}
          className="w-full h-full aspect-auto rounded-xl"
        />
      </div>
      <span className="absolute text-5xl leading-tight text-white -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 font-bpg-boxo">
        {title}
      </span>
    </div>
  );
};

export default AboutAdvantagesItemImage;
