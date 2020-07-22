import React from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import bot from "../../../assets/correctibot.png";

export default function BotBubble(props) {
  const [visible, setVisible] = React.useState("");
  const [imageItem, setImageItem] = React.useState("");
  const [contentVisible, setContentVisible] = React.useState("");
  const bubbleAnimation = useAnimation();
  const indicatorAnimation = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.3,
    rootMargin: "20% 0px -40% 0px",
  });

  React.useEffect(() => {
    let randomDelay = Math.floor(Math.random() * (1501 - 300)) + 300;

    if (inView) {
      setVisible("bubble-visible");
      props.setCurrentProgress(props.itemIndex);
      setTimeout(() => {
        const sequence = async () => {
          bubbleAnimation.start({
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.3,
            },
          });

          await indicatorAnimation.start({
            y: "-10px",
            opacity: 0,
            transition: {
              duration: 0.3,
            },
            transitionEnd: {
              display: "none",
            },
          });

          return setContentVisible("content-visible");
        };
        sequence();
      }, randomDelay);
    } else {
      setVisible("");
    }
    // eslint-disable-next-line
  }, [inView, props.delay]);

  React.useEffect(() => {
    if (props.type === "image" || props.type === "image-full") {
      setImageItem(require(`../../../assets/${props.content}`));
    }
  }, [props.type, props.content]);

  return (
    <div className={"bot-bubble " + visible + " " + contentVisible} ref={ref}>
      {props.type === "separator" ? (
        <div className="separator-container">
          <div>{props.content}</div>
        </div>
      ) : (
        <motion.div className="active-animation" animate={indicatorAnimation}>
          <img src={bot} alt="correctibot" />
          <div className="thinking-indicator">
            <div />
            <div />
            <div />
          </div>
        </motion.div>
      )}

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        style={{ transformOrigin: "top left" }}
        animate={bubbleAnimation}
      >
        {props.type === "text" ? (
          <div className="text-container">{props.content}</div>
        ) : null}
        {props.type === "image" || props.type === "image-full" ? (
          <>
            <div
              className={
                props.type === "image-full"
                  ? "image-container fullsize"
                  : "image-container"
              }
            >
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
        {props.type === "article" ? (
          <div className="card">
            <img
              src={require(`../../../assets/${props.image}`)}
              alt="artikelbild"
            />
            <a href={props.url} target="_blank" rel="noopener noreferrer">
              <div className="text-container">
                <div className="source">{props.source}</div>
                <div className="title">{props.title}</div>
              </div>
            </a>
          </div>
        ) : null}
      </motion.div>
    </div>
  );
}
