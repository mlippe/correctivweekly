import React from "react";
import { motion, useAnimation } from "framer-motion";
import { ReactComponent as Logo } from "../../assets/correctiv-weekly.svg";

export default function LogoAnimation(props) {
  const logoAnimation = useAnimation();

  React.useEffect(() => {
    const sequence = async () => {
      await logoAnimation.start({
        scale: 1,
        opacity: 0.9,
        transition: {
          delay: 1,
          duration: 5,
          type: "spring",
          stiffness: 200,
          damping: 20,
        },
      });

      await logoAnimation.start({
        scale: [1, 0.9, 100],
        opacity: [0.9, 0.75, 0],
        transition: {
          delay: 1,
          duration: 2,
          ease: "easeOut",
        },
      });

      return await props.setStartAnimationFinished(true);
    };

    sequence();
  }, []);

  return (
    <motion.div
      className="logo-animation"
      initial={{ scale: 0, opacity: 0 }}
      animate={logoAnimation}
    >
      <Logo />
      <motion.div
        className="subtitle"
        initial={{ y: "10px", opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 1, delay: 1.3 },
        }}
      >
        <h2>Das Quiz zu den Nachrichten</h2>
      </motion.div>
    </motion.div>
  );
}
