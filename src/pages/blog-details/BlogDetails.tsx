import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams<{ id: string }>();
  return <div>{id}</div>;
};

export default BlogDetails;
