import { useState } from "react";
import useContentful from "@/hooks/useContentful";

import { blogsDataTypes } from "@/types/blogsDataTypes";

import Section from "../ui/section";
import SectionHeading from "../section-heading/SectionHeading";
import BlogTemplate from "../blog-template/BlogTemplate";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui";

import styles from "./BlogsCarousel.module.css";

interface BlogsCarouselProps {
  heading?: string;
  subheading?: string;
}

const BlogsCarousel: React.FC<BlogsCarouselProps> = ({
  heading,
  subheading,
}) => {
  const [blogs, setBlogs] = useState<blogsDataTypes[]>([]);

  const query = "blog";
  const setStateFunction = setBlogs;

  const {} = useContentful<blogsDataTypes[]>({ query, setStateFunction });

  return (
    <Section
      className={`bg-muted ${styles.bleed} py-10 md:py-12 lg:py-14 xl:py-16`}
    >
      <SectionHeading heading={heading} subheading={subheading} />
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
      </Carousel>
    </Section>
  );
};

export default BlogsCarousel;
