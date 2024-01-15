import SectionHeading from "@/components/section-heading/SectionHeading";
import Section from "@/components/ui/section";

const AboutUs = () => {
  return (
    <Section>
      <SectionHeading
        heading="რატომ ვართ საუკეთესოები?"
        subheading="ჩვენ შესახებ"
      />
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-center md:gap-20">
        {/* Image */}
        <div className="max-w-[20rem]">
          <img
            src="https://ik.imagekit.io/dcpowg7vx/Shtagoneba/about/about-hero-img.png"
            alt="მომღინარი გოგონას სურათი"
          />
        </div>
        {/* Content */}
        <div className="md:w-1/2">
          <p>
            შთაგონება შეიქმნა 2018 წელს, სტუდენტების აკადემიური ცხოვრების
            გამარტივების მიზნით.
          </p>
          <p>
            შთაგონება წარმოადგენს საბაკალავრო, სამაგისტრო და ზოგადად -
            ნებისმიერი საუნივერსიტეტო ნაშრომის შესრულების სერვისს.
          </p>
          <p>
            5 წლის განმავლობაში, ჩვენმა კვალიფიციურმა მწერლებმა უკვე შეასრულეს
            14733-ზე მეტი შეკვეთა, 97%+ წარმატების მაჩვენებლით. შთაგონება ქართულ
            ბაზარზე ერთადერთი სერვისია, რომელიც სტუდენტებს სთავაზობს სტაბილურ და
            სწრაფ აკადემიურ სერვისს გარანტირებული ხარისხით.{" "}
          </p>
          <p>
            ჩვენ ვიყენებთ ყველა თანამედროვე და პროფესიონალურ აკადემიურ ციფრულ
            ინსტრუმენტს, რომელიც გვეხმარება ნაშრომის გრამატიკულ უზრუნველყოფასა
            და პლაგიატისგან თავის არიდებაში.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default AboutUs;
