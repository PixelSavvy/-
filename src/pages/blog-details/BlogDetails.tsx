import { useState } from "react";
import { useParams } from "react-router-dom";
import useContentful from "@/hooks/useContentful";

import Section from "@/components/ui/section";
import { AspectRatio } from "@/components/ui";
import BlogsCarousel from "@/components/blogs-carousel/BlogsCarousel";

import { formatDate } from "@/lib/formatDate";
import { documentToReact } from "@/lib/documentToReactComponents";

import { blogsDataTypes } from "@/types/blogsDataTypes";

const BlogDetails = () => {
  const [blogData, setBlogData] = useState<blogsDataTypes[]>([]);
  const { id } = useParams<{ id: string }>();

  const query = "blog";
  const setStateFunction = setBlogData;

  const {} = useContentful<blogsDataTypes[]>({ query, setStateFunction });

  const blog = blogData.find((blog) => blog.blogId === id);

  const blogTitle = blog?.blogTitle;
  const blogCategory = blog?.blogCategory;
  const blogDate = formatDate(blog?.blogDate);
  const blogCover = blog?.blogCover.fields.file.url;

  //! Convert document to react components (useContentful text-types and document-to-react-components)
  const body = documentToReact(blog?.blogBody);

  return (
    <Section>
      <article className="max-w-4xl mx-auto ">
        {/* Blog cover image */}
        <AspectRatio ratio={16 / 9} className="mb-4">
          <img
            src={blogCover}
            alt={blogTitle}
            className="object-cover object-center w-full h-full rounded-xl"
            loading="lazy"
          />
        </AspectRatio>
        {/* Blog details - category & date */}
        <div className="mb-8">
          <span className="mr-4 text-secondary font-tbc-caps-bld ">
            {blogCategory}
          </span>
          <span className="text-gray-600 small font-tbc-caps-md">
            {blogDate}
          </span>
        </div>
        {/* Blog title */}
        <h1 className="mb-10 font-tbc-caps-bld">{blogTitle}</h1>
        {/* Blog body */}
        <div>{body?.blogBody}</div>
      </article>

      {/* Blogs list */}
      <BlogsCarousel />
    </Section>
  );
};

export default BlogDetails;
