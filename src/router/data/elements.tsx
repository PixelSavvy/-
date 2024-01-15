import { lazy } from "react";

const RootLayout = lazy(() => import("@/pages/layouts/RootLayout"));

const Home = lazy(() => import("@/pages/home/HomePage"));

const About = lazy(() => import("@/pages/about/AboutPage"));

const Services = lazy(() => import("@/pages/services/ServicesPage"));

const Blogs = lazy(() => import("@/pages/blogs/BlogsPage"));
const BlogDetails = lazy(() => import("@/pages/blog-details/BlogDetails"));

export const Elements = {
  RootLayout,

  Home,
  About,
  Services,
  Blogs,
  BlogDetails,
};
