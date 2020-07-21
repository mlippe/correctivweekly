import React from "react";
import { useInView } from "react-intersection-observer";
import ArticleCard from "./ArticleCard";
import VideoCard from "./VideoCard";

export default function MoreInfo(props) {
  const [visible, setVisible] = React.useState("");

  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  React.useEffect(() => {
    if (inView) {
      setVisible("animation-visible");
    }
  }, [inView]);

  return (
    <div className={"more-info scroll-animation " + visible} ref={ref}>
      <div className="headline">Weitere, relevante Infoquellen:</div>
      {props.infoData.articles ? (
        <>
          <div className="media-title">Artikel</div>
          <div className="media-container">
            {props.infoData.articles.map((item, index) => (
              <ArticleCard
                key={index}
                image={item.image}
                source={item.source}
                title={item.title}
                url={item.url}
              />
            ))}
          </div>
        </>
      ) : null}
      {props.infoData.videos ? (
        <>
          <div className="media-title">Videos</div>
          <div className="media-container">
            {props.infoData.videos.map((item, index) => (
              <VideoCard
                key={index}
                image={item.image}
                source={item.source}
                title={item.title}
                url={item.url}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
