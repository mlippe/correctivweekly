import React from "react";
import ArchiveCard from "./ArchiveCard";
import { useInView } from "react-intersection-observer";

export default function QuizArchive() {
  const [visible, setVisible] = React.useState("");

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  React.useEffect(() => {
    if (inView) {
      setVisible("animation-visible");
    }
  }, [inView]);

  return (
    <div className={"quiz-archive scroll-animation " + visible} ref={ref}>
      <h3>Vergangene Quizzes</h3>
      <div className="card-container">
        <ArchiveCard weeksBehind={1} />
        <ArchiveCard weeksBehind={2} />
        <ArchiveCard weeksBehind={3} />
        <ArchiveCard weeksBehind={4} />
        <ArchiveCard weeksBehind={5} />
        <ArchiveCard weeksBehind={6} />
        <ArchiveCard weeksBehind={7} />
      </div>
      <h5>Alle zeigen {">"}</h5>
    </div>
  );
}
