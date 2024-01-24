import Counter from "./counter/Counter";
import Services from "./services/Services";
import Testimonials from "./testimonials/Testimonials";
import Faq from "./faq/Faq";
import BlogsCarousel from "@/components/blogs-carousel/BlogsCarousel";
import Universities from "@/components/universities/Universities";

const HomePage = () => {
  return (
    <>
      <Universities />
      <Counter />
      <Services />
      <Testimonials />
      <Faq />
      <BlogsCarousel heading="წაიკითხეთ ჩვენი ბლოგები" subheading="ბლოგები" />
    </>
  );
};

export default HomePage;
