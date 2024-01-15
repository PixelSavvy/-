const georgianMonths = [
  "იანვარი",
  "თებერვალი",
  "მარტი",
  "აპრილი",
  "მაისი",
  "ივნისი",
  "ივლისი",
  "აგვისტო",
  "სექტემბერი",
  "ოქტომბერი",
  "ნოემბერი",
  "დეკემბერი",
];

const formatDate = (ISO: string) => {
  const date = new Date(ISO);

  const userLocale = navigator.language || "ka-GE";

  const formattedDate = new Intl.DateTimeFormat(userLocale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

  const georgianFormattedDate = georgianMonths.reduce(
    (formatted, monthName, index) =>
      formatted.replace(
        new RegExp(
          new Intl.DateTimeFormat("en-US", { month: "long" }).format(
            new Date(2000, index, 1)
          ),
          "i"
        ),
        monthName
      ),
    formattedDate
  );

  return georgianFormattedDate;
};

export default formatDate;
