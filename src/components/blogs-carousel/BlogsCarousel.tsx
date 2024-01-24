import { useState } from "react";
import useContentful from "@/hooks/useContentful";

import { blogsDataTypes } from "@/types/blogsDataTypes";

import Section from "../ui/section";

import BlogTemplate from "../blog-template/BlogTemplate";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";

import styles from "./BlogsCarousel.module.css";
import SectionHeading from "../section-heading/SectionHeading";

interface BlogsCarouselProps {
  heading?: string;
  subheading?: string;
}

const BlogsCarousel: React.FC<BlogsCarouselProps> = () => {
  const [blogs, setBlogs] = useState<blogsDataTypes[]>([]);

  const query = "blog";
  const setStateFunction = setBlogs;

  const {} = useContentful<blogsDataTypes[]>({ query, setStateFunction });

  return (
    <Section
      className={`bg-muted ${styles.bleed} py-12 md:py-14 lg:py-16 xl:py-18 `}
    >
      {/* Carousel Heading */}
      <SectionHeading heading="წაიკითხეთ ჩვენი ბლოგები" subheading="ბლოგები" />
      {/* Blogs Carousel */}
      <Carousel>
        <CarouselContent className="-ml-4 md:-ml-6">
          {blogs.map((blog, id) => (
            <CarouselItem
              key={id}
              className="p-0 pl-4 rounded-lg md:pl-6 sm:basis-1/2 lg:basis-1/3 "
            >
              <BlogTemplate blog={blog} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Carousel Controls */}
        <div className="absolute mt-6 ml-12 md:ml-10 md:mt-8 ">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </Section>
  );
};

export default BlogsCarousel;
