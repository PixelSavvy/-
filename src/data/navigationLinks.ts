import { navigationLinksTypes } from "@/types";

export const navLinks: navigationLinksTypes[] = [
  {
    label: "მთავარი",
    to: "",
    collapsed: false,
  },
  {
    label: "ჩვენ შესახებ",
    to: "ჩვენ-შესახებ",
    collapsed: false,
  },
  {
    label: "სერვისები",
    to: "სერვისები",
    collapsed: true,
    sublinks: [
      {
        label: "საბაკალავრო ნაშრომი",
        to: "სერვისები/საბაკალავრო-ნაშრომი",
      },
      {
        label: "სამაგისტრო ნაშრომი",
        to: "სერვისები/სამაგისტრო-ნაშრომი",
      },
      {
        label: "რეფერატი",
        to: "სერვისები/რეფერატი",
      },
      {
        label: "ესე",
        to: "სერვისები/ესე",
      },
      {
        label: "პრეზენტაცია",
        to: "სერვისები/პრეზენტაცია",
      },
    ],
  },
  {
    label: "ბლოგები",
    to: "ბლოგები",
    collapsed: false,
  },
];
