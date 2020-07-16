import React from "react";
import positive from "../../../assets/positive.png";
import negative from "../../../assets/negative.png";
import ResultsStats from "./ResultsStats";

export default function ResultsTop(props) {
  return (
    <div
      className={
        props.answerStatus ? "results-top positive" : "results-top negative"
      }
    >
      {props.answerStatus ? (
        <>
          <img src={positive} alt="positive icon" />
          <h1 className="title">Korrekt!</h1>
        </>
      ) : (
        <>
          <img src={negative} alt="negative icon" />
          <h1 className="title">Leider Falsch!</h1>
        </>
      )}

      <div className="subtitle">{props.subtitle}</div>
      <ResultsStats posPercentStat={props.posPercentStat} />
    </div>
  );
}
