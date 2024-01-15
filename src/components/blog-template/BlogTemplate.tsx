import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  AspectRatio,
} from "@/components/ui";

import { blogsDataTypes } from "@/types/blogsDataTypes";
import { formatDate } from "@/lib/formatDate";
import { Link } from "react-router-dom";

interface BlogTemplateProps {
  blog: blogsDataTypes;
}

const BlogTemplate: React.FC<BlogTemplateProps> = ({ blog }) => {
  const blogTitle = blog.blogTitle;
  const blogCategory = blog.blogCategory;
  const blogDate = formatDate(blog.blogDate);
  const blogCover = blog.blogCover.fields.file.url;
  const blogDescription = blog.blogDescription;
  const blogId = blog.blogId;

  return (
    <Card className="flex flex-col items-start justify-between h-full transition-colors border-none shadow-none hover:bg-neutral-100 focus-within:bg-neutral-100 ">
      <CardHeader>
        {/* Cover photo */}
        <AspectRatio ratio={4 / 3} className="w-full h-full">
          <img
            src={blogCover}
            alt={blogTitle}
            className="w-full h-full rounded-md "
          />
        </AspectRatio>

        {/* Blog title, category and date */}
        <CardDescription>
          <span className="mr-4 text-secondary font-tbc-caps-bld ">
            {blogCategory}
          </span>
          <span className="text-gray-600 small font-tbc-caps-md">
            {blogDate}
          </span>
        </CardDescription>
        <CardTitle>{blogTitle}</CardTitle>
      </CardHeader>
      <CardContent className="whitespace-wrap">
        {blogDescription}...
      </CardContent>
      <CardFooter className="transition-colors font-tbc-caps-bld hover:underline hover:underline-offset-2 hover:text-secondary focus-visible:text-secondary focus-visible:underline focus-visible:underline-offset-2">
        <Link to={`/ბლოგები/${blogId}`}>წაიკითხე მეტი</Link>
      </CardFooter>
    </Card>
  );
};

export default BlogTemplate;
