import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "@/router";

import LazyMotionProvider from "./animation/LazyMotionProvider";

const App = () => {
  return (
    <LazyMotionProvider>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </LazyMotionProvider>
  );
};

export default App;
