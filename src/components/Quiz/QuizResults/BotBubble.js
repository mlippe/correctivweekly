import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function BotBubble(props) {
  const [visible, setVisible] = React.useState("");
  const [imageItem, setImageItem] = React.useState("");

  const [ref, inView] = useInView({
    threshold: 1,
  });

  React.useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setVisible("bubble-visible");
      }, props.delay);
    }
  }, [inView]);

  React.useEffect(() => {
    if (props.type === "image") {
      setImageItem(require(`../../../assets/${props.content}`));
    }
  }, []);

  return (
    <div className={"bot-bubble " + visible} ref={ref}>
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
            <a href={props.sourceUrl} target="_blank" rel="noopener noreferrer">
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
    </div>
  );
}
