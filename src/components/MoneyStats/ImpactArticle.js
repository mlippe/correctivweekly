import React from "react";
import { useInView } from "react-intersection-observer";

export default function ImpactArticle(props) {
  const [fullVisibility, setfullVisibility] = React.useState("collapsed");
  const [overlayVisible, setOverlayVisible] = React.useState(true);
  const [visible, setVisible] = React.useState("");

  const [ref, inView] = useInView({
    threshold: 0.2
  });

  React.useEffect(() => {
    if (inView) {
      setVisible("animation-visible");
    }
  }, [inView]);

  function handleClick() {
    setfullVisibility("");
  }

  function handleTransitionEnd() {
    setOverlayVisible(false);
  }

  return (
    <div className={"impact-article scroll-animation " + visible} ref={ref}>
      <div className={"date"}>{props.date}</div>
      <div className={"headline"}>{props.headline}</div>
      <div
        className={"impact-container " + fullVisibility}
        onClick={handleClick}
      >
        <div className={"impact"}>{props.impact}</div>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <button className="small">Ganzen Artikel lesen</button>
        </a>
        {overlayVisible ? (
          <div
            className="gradient-overlay"
            onTransitionEnd={handleTransitionEnd}
          />
        ) : null}
      </div>
    </div>
  );
}

ImpactArticle.defaultProps = {
  date: "Juni 2020",
  headline: "XY-Skandal",
  impact:
    "Impact: Im November 2019 kündigte das Bundesfinanzministerium die Gründung einer Spezialeinheit für den Kampf gegen groß angelegten Steuerbetrug mit. Die beim Bundeszentralamt für Steuern angesiedelte Einheit soll mit 48 Stellen ausgestattet sein. Nach Veröffentlichung der Recherche Cum-Ex Files im Oktober 2018 hatte Finanzminister Olaf Scholz angekündigt, stärker gegen den Betrug vorzugehen.",
  link: "https://www.google.de"
};
