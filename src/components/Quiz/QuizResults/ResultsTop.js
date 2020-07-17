import React from "react";
import positive from "../../../assets/positive.png";
import negative from "../../../assets/negative.png";
import ResultsStats from "./ResultsStats";
import { motion } from "framer-motion";

export default function ResultsTop(props) {
  return (
    <div
      className={
        props.answerStatus ? "results-top positive" : "results-top negative"
      }
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1,
            delay: 1,
          },
        }}
        className={"background"}
      />
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
