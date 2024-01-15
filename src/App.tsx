import { BrowserRouter } from "react-router-dom";
import LazyMotionProvider from "@/animation/LazyMotionProvider";
import AnimatedRoutes from "./router";

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
