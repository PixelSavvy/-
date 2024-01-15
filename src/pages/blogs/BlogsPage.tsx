import { useState } from "react";
import useContentful from "@/hooks/useContentful";

import Section from "@/components/ui/section";

import { blogsDataTypes } from "@/types/blogsDataTypes";
import BlogTemplate from "@/components/blog-template/BlogTemplate";
import SectionHeading from "@/components/section-heading/SectionHeading";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState<blogsDataTypes[]>([]);

  const query = "blog";
  const setStateFunction = setBlogs;

  const {} = useContentful<blogsDataTypes[]>({ query, setStateFunction });

  return (
    <Section>
      <SectionHeading heading="ჩვენი ბლოგები" />
      <ul className="grid grid-cols-1 gap-6 md:gap-4 lg:gap-6 md:grid-cols-2 lg:grid-cols-3 ">
        {blogs.map((blog, id) => (
          <BlogTemplate key={id} blog={blog} />
        ))}
      </ul>
    </Section>
  );
};

export default BlogsPage;
