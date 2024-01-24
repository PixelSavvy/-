import { BrowserRouter } from "react-router-dom";

import AnimatedRoutes from "@/router";

import LazyMotionProvider from "./animation/LazyMotionProvider";
import FacebookChatProvider from "./components/facebook-chat/FacebookChatProvider";

import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LazyMotionProvider>
      <BrowserRouter>
        <FacebookChatProvider>
          <AnimatedRoutes />
        </FacebookChatProvider>
      </BrowserRouter>
    </LazyMotionProvider>
  );
};

export default App;
