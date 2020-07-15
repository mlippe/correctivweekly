import React from "react";

import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";

export default function MoreScoresEntry(props) {
  let imageSrc;

  if (props.image === "robot") {
    imageSrc = user1;
  } else if (props.image === "dog") {
    imageSrc = user2;
  } else if (props.image === "ball") {
    imageSrc = user3;
  }

  return (
    <div className={"more-scores-entry"}>
      <div className="number">{props.position}.</div>
      <div className="image-container">
        <img src={imageSrc} alt="user icon" />
      </div>
      <div className="data-container">
        <div className="left">
          <h3>{props.name}</h3>
          <div className="user-title">{props.title}</div>
        </div>
        <div className="right">
          <div className="score">
            <h3>{props.score}</h3>
            <div className="data-subtitle">Score</div>
          </div>
        </div>
      </div>
    </div>
  );
}

MoreScoresEntry.defaultProps = {
  image: "robot",
  position: "1",
  name: "Anja K.",
  title: "Wahrheitssuchende",
  score: "2685",
  donated: "235€"
};
