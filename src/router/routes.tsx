import { Route } from "react-router-dom";

import { Paths, Elements } from "@/router/data";
import { withSuspense } from "@/lib/withSuspense";

import Loader from "@/components/loader/Loader";

//! Routes
const HomeRoute = <Route path={Paths.Home} element={<Elements.Home />} />;

const AboutRoute = <Route path={Paths.About} element={<Elements.About />} />;

const ServicesRoutes = (
  <Route path={Paths.Services} element={<Elements.Services />} />
);

const BlogsRoutes = <Route path={Paths.Blogs} element={<Elements.Blogs />} />;

const BlogDetailsRoutes = (
  <Route path={Paths.BlogDetails} element={<Elements.BlogDetails />} />
);

//! RootRoute

const rootElement = withSuspense(<Elements.RootLayout />, <Loader />);

const rootChildren = [
  HomeRoute,
  AboutRoute,
  ServicesRoutes,
  BlogsRoutes,
  BlogDetailsRoutes,
];

const Root = (
  <Route element={rootElement} path={Paths.Root} children={rootChildren} />
);

export { Root };
