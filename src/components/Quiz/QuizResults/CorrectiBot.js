import React from "react";
import bot from "../../../assets/correctibot_2.png";
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
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      });
      textAnimation.start({
        opacity: 1,
        transition: {
          duration: 0.5,
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
            opacity: 0,
          }}
          animate={imageAnimation}
          className="image-container"
        >
          <img src={bot} alt="bot " />
        </motion.div>
        <motion.div
          className="text-wrap"
          initial={{
            opacity: 0,
          }}
          animate={textAnimation}
        >
          <div className="active-dot" />
          <h1>CorrectiBot</h1>
          <h2>versorgt dich mit Hintergrund-Infos zum Thema</h2>
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
