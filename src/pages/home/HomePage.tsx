import Counter from "./counter/Counter";
import Services from "./services/Services";
import Testimonials from "./testimonials/Testimonials";
import Faq from "./faq/Faq";
import BlogsCarousel from "@/components/blogs-carousel/BlogsCarousel";

const HomePage = () => {
  return (
    <>
      <Counter />
      <Services />
      <Testimonials />
      <Faq />
      <BlogsCarousel heading="წაიკითხეთ ჩვენი ბლოგები" subheading="ბლოგები" />
    </>
  );
};

export default HomePage;
