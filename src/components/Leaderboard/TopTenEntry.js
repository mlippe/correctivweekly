import React from "react";
import { useInView } from "react-intersection-observer";
import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";

export default function TopTenEntry(props) {
  const [visible, setVisible] = React.useState("");

  const [ref, inView] = useInView({
    threshold: 0.2
  });

  React.useEffect(() => {
    if (inView) {
      setVisible("animation-visible");
    }
  }, [inView]);

  let imageSrc;

  if (props.image === "robot") {
    imageSrc = user1;
  } else if (props.image === "dog") {
    imageSrc = user2;
  } else if (props.image === "ball") {
    imageSrc = user3;
  }

  return (
    <div className={"top-ten-entry scroll-animation " + visible} ref={ref}>
      <div className="number">{props.position}.</div>
      <div className="image-container">
        <img src={imageSrc} alt="user icon" />
      </div>
      <div className="data-container">
        <div className="top">
          <h3>{props.name}</h3>
          <div className="user-title">{props.title}</div>
        </div>
        <div className="bottom">
          <div className="score">
            <h3>{props.score}</h3>
            <div className="data-subtitle">Score</div>
          </div>
          <div className="donated">
            <h3>{props.donated}</h3>
            <div className="data-subtitle">Gespendet</div>
          </div>
        </div>
      </div>
    </div>
  );
}

TopTenEntry.defaultProps = {
  image: "robot",
  position: "1",
  name: "Anja K.",
  title: "Wahrheitssuchende",
  score: "2685",
  donated: "235€"
};
