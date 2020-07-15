import React from "react";
import InteractionTip from "./InteractionTip";
import Donats from "./Donats";
import DonatSlot from "./DonatSlot";
import { motion } from "framer-motion";

export default function QuizInteractives(props) {
  const [tipOpacity, setTipOpacity] = React.useState(1);
  const [slotTop, setSlotTop] = React.useState(0);

  //console.log(props.quizData);

  return (
    <motion.div
      initial={{
        y: "2vh",
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 1.2, ease: "easeOut" }
      }}
      className={"quiz-interactives"}
    >
      <Donats
        slotTop={slotTop}
        answerStatus={props.answerStatus}
        setTipOpacity={setTipOpacity}
        setQuestionActive={props.setQuestionActive}
        donatCount={props.donatCount}
        setDonatCount={props.setDonatCount}
      />
      <InteractionTip tipOpacity={tipOpacity} donatCount={props.donatCount} />
      <DonatSlot
        setSlotTop={setSlotTop}
        answerStatus={props.answerStatus}
        donatCount={props.donatCount}
      />
    </motion.div>
  );
}
