import styles from "./Footer.module.css";
import { socialMediaLinksData } from "@/data/socialMediaLinksData";
import SocialMediaButton from "../buttons/SocialMediaButton";

const Footer = () => {
  return (
    <footer
      className={`py-6 md:py-8 lg:py-10 bg-primary ${styles.bleed} w-full flex flex-col justify-start items-center gap-6 md:gap-8 lg:gap-10  `}
      id="contact"
    >
      {/* Footer content */}
      <div className="flex flex-col w-full gap-4 text-center place-items-center md:flex-row md:justify-between md:items-start">
        {/* Logo */}
        <div className="w-40">
          <img
            src="https://ik.imagekit.io/jusiu7gbs/Shtagoneba/cover.jpg?updatedAt=1695393629050"
            alt="შთაგონება - ლოგო"
            className="object-cover aspect-video"
          />
        </div>

        {/* Social media */}
        <div className="lg:text-left">
          <p className="mb-3 font-tbc-caps-md">დაგვიმეგობრდი:</p>
          <ul className="flex items-center justify-center gap-6 lg:justify-start">
            {socialMediaLinksData.map((link, id) => (
              <li key={id} className="group">
                <SocialMediaButton
                  icon={link.icon}
                  mobileHref={link.mobileHref}
                  desktopHref={link.desktopHref}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
