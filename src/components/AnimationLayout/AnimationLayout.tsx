import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { useBackground } from "~/context";
import { currentRoute } from "~/routes";
import { AppLayout, BackgroundImage } from "~/styled-components";
import { NavBar } from "../NavBar";

const animation = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: 0.5,
    delay: 0.1,
    ease: [0, 0.71, 0.2, 1.01],
  },
};

type animationType = Keyframe[] | PropertyIndexedKeyframes | null;

const bgAnimation: animationType = [
  { transform: "scale(1.1)" },
  { transform: "scale(1)" },
];

const bgTiming: KeyframeAnimationOptions = {
  duration: 250,
  iterations: 1,
};


export const AnimationLayout = () => {
  const { backgroundURL, setBackground } = useBackground();
  const { pathname } = useLocation();

  const bgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (bgRef.current) {
      bgRef.current.animate(bgAnimation, bgTiming);
    }
  }, [backgroundURL]);

  useEffect(() => {
    const currRoute = currentRoute(pathname);
    const currentBackground = currRoute.backgroundImage;
    setBackground(currentBackground);
  }, [pathname]);

  return (
    <>
      <AppLayout background_url={backgroundURL}>
        <NavBar />
        <motion.div
          key={pathname}
          initial={animation.initial}
          animate={animation.animate}
          transition={animation.transition}
        >
          <Outlet />
        </motion.div>
        <BackgroundImage ref={bgRef} src={backgroundURL} />
      </AppLayout>
    </>
  );
};
