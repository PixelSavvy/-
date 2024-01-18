import { Route } from "react-router-dom";
import { Paths, Elements } from "@/router/data";

const childrenRoutes = (
  <>
    <Route element={<Elements.RootLayout />} path={Paths.Root}>
      {/* Hero Layout Routes */}
      <Route element={<Elements.HeroLayout />} path={Paths.HeroLayout}>
        <Route element={<Elements.Home />} path={Paths.Home} />
        <Route element={<Elements.About />} path={Paths.About} />
        <Route element={<Elements.Services />} path={Paths.Services} />
      </Route>
      {/* Blogs Routes (without Hero) */}
      <Route element={<Elements.Blogs />} path={Paths.Blogs} />
      <Route element={<Elements.BlogDetails />} path={Paths.BlogDetails} />
    </Route>
  </>
);

export default childrenRoutes;
