import React from "react";
import { useInView } from "react-intersection-observer";

export default function OriginalArticle(props) {
  const [visible, setVisible] = React.useState("");
  const [imageItem, setImageItem] = React.useState("");

  const [ref, inView] = useInView({
    threshold: 0,
    rootMargin: "0px 0px -20% 0px",
  });

  React.useEffect(() => {
    if (inView) {
      setVisible("animation-visible");
    }
  }, [inView]);

  React.useEffect(() => {
    setImageItem(require(`../../../assets/${props.articleData.image}`));
  }, [props.articleData.image]);

  return (
    <div className={"original-article scroll-animation " + visible} ref={ref}>
      <div className="headline">
        Lies den ganzen Artikel zum Thema auf {props.articleData.source}:
      </div>
      <div className="card">
        <img src={imageItem} alt="artikelbild" />
        <a
          href={props.articleData.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-container">
            <div className="source">{props.articleData.source}</div>
            <div className="title">{props.articleData.title}</div>
          </div>
        </a>
      </div>
    </div>
  );
}
