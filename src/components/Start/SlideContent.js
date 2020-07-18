import React from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import { useInView } from "react-intersection-observer";

export default function SlideContent(props) {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setIsPlaying(true);
      }, 500);
    } else {
      setIsPlaying(false);
    }
  }, [inView]);

  return (
    <div className="content" ref={ref}>
      <div className="animation-wrap">
        <ReactPlayer
          url={props.source}
          loop={true}
          muted={true}
          playsinline
          playing={isPlaying}
          volume={0}
          width={"100%"}
          height={"100%"}
        />
      </div>
      <div className="text-wrap">
        <h2>{props.text}</h2>
      </div>
      {props.tip ? (
        <motion.div
          initial={{ x: "5px", opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { delay: 2, duration: 0.75 },
          }}
          className="tip"
        >
          Wischen zum Fortsetzen {">"}
        </motion.div>
      ) : null}
    </div>
  );
}
