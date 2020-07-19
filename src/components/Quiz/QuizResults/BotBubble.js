import React from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import bot from "../../../assets/correctibot.png";

export default function BotBubble(props) {
  const [visible, setVisible] = React.useState("");
  const [imageItem, setImageItem] = React.useState("");
  const bubbleAnimation = useAnimation();
  const indicatorAnimation = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0,
    rootMargin: "0px 0px -40% 0px",
  });

  React.useEffect(() => {
    let randomDelay = Math.floor(Math.random() * (2001 - 500)) + 500;

    if (inView) {
      setVisible("bubble-visible");
      setTimeout(() => {
        bubbleAnimation.start({
          scale: 1,
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        });

        indicatorAnimation.start({
          y: "-10px",
          opacity: 0,
          transition: {
            duration: 0.3,
          },
          transitionEnd: {
            display: "none",
          },
        });
      }, randomDelay);
    } else {
      setVisible("");
    }
    // eslint-disable-next-line
  }, [inView, props.delay]);

  React.useEffect(() => {
    if (props.type === "image") {
      setImageItem(require(`../../../assets/${props.content}`));
    }
  }, [props.type, props.content]);

  return (
    <div className={"bot-bubble " + visible} ref={ref}>
      <motion.div className="active-animation" animate={indicatorAnimation}>
        <img src={bot} alt="correctibot" />
        <div className="thinking-indicator">
          <div />
          <div />
          <div />
        </div>
      </motion.div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        style={{ transformOrigin: "top left" }}
        animate={bubbleAnimation}
      >
        {props.type === "text" ? (
          <div className="text-container">{props.content}</div>
        ) : null}
        {props.type === "image" ? (
          <>
            <div className="image-container">
              <img src={imageItem} alt="graph" />
            </div>
            <div className="source-wrap">
              <div className="source">
                Quelle: <span>"{props.source}"</span>
              </div>
              <a
                href={props.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Öffnen
              </a>
            </div>
          </>
        ) : null}
        {props.type === "separator" ? (
          <div className="separator-container">
            <div>{props.content}</div>
          </div>
        ) : null}
      </motion.div>
    </div>
  );
}
