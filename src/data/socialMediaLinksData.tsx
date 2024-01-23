import { Facebook, Instagram, Tiktok } from "@/assets/icons/icons";

export const socialMediaLinksData = [
  {
    icon: (
      <Facebook
        size={32}
        className="transition-all text-background group-hover:text-secondary group-focus-within:text-secondary"
      />
    ),
    mobileHref: "fb://profile/Shtagonebaa",
    desktopHref: "https://www.facebook.com/Shtagonebaa",
  },
  {
    icon: (
      <Instagram
        size={32}
        className="transition-all text-background group-hover:text-secondary group-focus-within:text-secondary"
      />
    ),
    mobileHref: "instagram://user?username=shtagoneba_ge",
    desktopHref: "https://www.instagram.com/shtagoneba_ge",
  },
  {
    icon: (
      <Tiktok
        size={32}
        className="transition-all text-background group-hover:text-secondary group-focus-within:text-secondary"
      />
    ),
    mobileHref: "tiktok://user?username=shtagoneba",
    desktopHref: "https://www.tiktok.com/@shtagoneba",
  },
];
