import React from "react";
import bot from "../../../assets/correctibot.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import BotBubble from "./BotBubble";

export default function CorrectiBot(props) {
  const [visible, setVisible] = React.useState("");
  const [indicatorVisible, setIndicatorVisible] = React.useState("");

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const [refIndicator, inViewIndicator] = useInView({
    threshold: 1,
  });

  React.useEffect(() => {
    if (inView) {
      setVisible("animation-visible");
    }
  }, [inView]);

  React.useEffect(() => {
    if (inViewIndicator) {
      setIndicatorVisible("indicator-visible");
    }
  }, [inViewIndicator]);

  return (
    <div className={"correcti-bot"}>
      <div className={"intro scroll-animation " + visible} ref={ref}>
        <img src={bot} alt="negative icon" />
        <h1>Hallo, ich bin CorrectiBot!</h1>
        <h2>Ich versorge Dich mit relevanten Hintergrund-Infos zum Thema:</h2>
      </div>
      <div className="bot-content" ref={refIndicator}>
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
        <div className={"thinking-indicator " + indicatorVisible}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
