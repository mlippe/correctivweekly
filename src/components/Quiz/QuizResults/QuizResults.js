import React from "react";

import ResultsTop from "./ResultsTop";

import { motion } from "framer-motion";

export default function QuizResults(props) {
  return (
    <motion.div className={"quiz-results"}>
      <ResultsTop
        answerStatus={props.answerStatus}
        subtitle={props.results.subtitle}
      />
    </motion.div>
  );
}
