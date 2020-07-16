import React from "react";
import videoPlay from "../../../assets/video-play.png";

export default function VideoCard(props) {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <div className={"video-card"}>
        <div className="image-container">
          <img className={"play-image"} src={videoPlay} alt="play" />
          <img
            className={"cover-image"}
            src={require(`../../../assets/${props.image}`)}
            alt="video image"
          />
        </div>
        <div className="text-container">
          <div className="source">{props.source}</div>
          <div className="title">{props.title}</div>
        </div>
      </div>
    </a>
  );
}
