import React from "react";

export default function ArticleCard(props) {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <div className={"article-card"}>
        <img
          src={require(`../../../assets/${props.image}`)}
          alt="article image"
        />
        <div className="text-container">
          <div className="title">{props.title}</div>
          <div className="source">{props.source}</div>
        </div>
      </div>
    </a>
  );
}
