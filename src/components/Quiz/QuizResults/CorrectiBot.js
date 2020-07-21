import React from "react";
import bot from "../../../assets/correctibot_2.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BotBubble from "./BotBubble";

export default function CorrectiBot(props) {
  const [visible, setVisible] = React.useState("");
  const [contentVisible, setContentVisible] = React.useState("");
  const [currentProgress, setCurrentProgress] = React.useState("");
  const textAnimation = useAnimation();
  const imageAnimation = useAnimation();

  const [oldRef, oldInView] = useInView({
    threshold: 0.1,
    rootMargin: "0px 0px -20% 0px",
  });

  React.useEffect(() => {
    if (oldInView) {
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
    // eslint-disable-next-line
  }, [oldInView]);

  const progressObserver = new IntersectionObserver((entry) => {
    if (entry[0].intersectionRatio > 0) {
      setContentVisible("animation-visible");
    }
  });

  React.useEffect(() => {
    const contentContainer = document.querySelector(".bot-content");
    progressObserver.observe(contentContainer);
  }, []);

  React.useEffect(() => {
    const totalItems = props.botData.length - 1;
    const temp = currentProgress / totalItems;
    const newProgress = Math.round((temp + Number.EPSILON) * 100) / 100;
    props.setIndicatorProgress(newProgress);
  }, [currentProgress]);

  return (
    <div className={"correcti-bot"}>
      <div className={"intro scroll-animation " + visible} ref={oldRef}>
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
      <div className={"bot-content scroll-animation " + contentVisible}>
        {props.botData.map((item, index) => (
          <BotBubble
            key={index}
            itemIndex={index}
            setCurrentProgress={setCurrentProgress}
            type={item.type}
            content={item.content}
            source={item.source}
            sourceUrl={item.sourceUrl}
            url={item.url}
            title={item.title}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
