import React from "react";
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
      }, 300);
    } else {
      setIsPlaying(false);
    }
  }, [inView]);

  return (
    <div className="content" ref={ref}>
      <div className="animation-wrap">
        <ReactPlayer
          url={props.source}
          config={{
            file: { attributes: { poster: props.poster } },
          }}
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
    </div>
  );
}
