import React from "react";
import bot from "../../../assets/correctibot.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BotBubble from "./BotBubble";

export default function CorrectiBot(props) {
  const [visible, setVisible] = React.useState("");
  const [contentVisible, setContentVisible] = React.useState("");
  const textAnimation = useAnimation();
  const imageAnimation = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.1,
    rootMargin: "0px 0px -20% 0px",
  });

  const [refIndicator, inViewIndicator] = useInView({
    threshold: 0,
    rootMargin: "0px 0px -50px 0px",
  });

  React.useEffect(() => {
    if (inView) {
      setVisible("animation-visible");
      imageAnimation.start({
        y: 0,
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: 1,
          type: "spring",
          stiffness: 200,
          damping: 15,
        },
      });

      textAnimation.start({
        y: 0,
        opacity: 1,
        transition: {
          delay: 1.3,
          duration: 1,
          type: "spring",
          stiffness: 200,
          damping: 15,
        },
      });
    }
  }, [inView]);

  React.useEffect(() => {
    if (inViewIndicator) {
      setContentVisible("animation-visible");
    }
  }, [inViewIndicator]);

  return (
    <div className={"correcti-bot"}>
      <div className={"intro scroll-animation " + visible} ref={ref}>
        <motion.div
          initial={{
            y: "20px",
            opacity: 0,
          }}
          animate={imageAnimation}
          className="image-container"
        >
          <img src={bot} alt="negative icon" />
          <div className="gradient" />
        </motion.div>
        <motion.div
          className="text-wrap"
          initial={{
            y: "20px",
            opacity: 0,
          }}
          animate={textAnimation}
        >
          <h1>Hallo, ich bin CorrectiBot!</h1>
          <h2>Ich versorge Dich mit relevanten Hintergrund-Infos zum Thema:</h2>
        </motion.div>
      </div>
      <div
        className={"bot-content scroll-animation " + contentVisible}
        ref={refIndicator}
      >
        {props.botData.map((item, index) => (
          <BotBubble
            key={index}
            type={item.type}
            delay={item.delay}
            content={item.content}
            source={item.source}
            sourceUrl={item.sourceUrl}
          />
        ))}
      </div>
    </div>
  );
}
