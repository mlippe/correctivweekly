import React from "react";
import { useInView } from "react-intersection-observer";
import MoreScoresEntry from "./MoreScoresEntry.js";

export default function MoreScores() {
  const [visible, setVisible] = React.useState("");

  const [ref, inView] = useInView({
    threshold: 0.2
  });

  React.useEffect(() => {
    if (inView) {
      setVisible("animation-visible");
    }
  }, [inView]);

  return (
    <div className={"more-scores scroll-animation " + visible} ref={ref}>
      <MoreScoresEntry
        position={11}
        name={"günther h."}
        title={"Nachrichtenkenner"}
        score={1880}
      />
      <MoreScoresEntry
        image={"ball"}
        position={12}
        name={"Marianna K."}
        title={"Morgenpostberater"}
        score={1879}
      />
      <MoreScoresEntry
        image={"ball"}
        position={13}
        name={"Max h."}
        title={"Orakel"}
        score={1868}
      />
      <MoreScoresEntry
        image={"dog"}
        position={14}
        name={"Felix W."}
        title={"Faker"}
        score={1866}
      />
      <MoreScoresEntry
        position={15}
        name={"Samantha F."}
        title={"Wahrheitssuchende"}
        score={1864}
      />
      <MoreScoresEntry
        image={"ball"}
        position={16}
        name={"John D."}
        title={"Nachrichtenkenner"}
        score={1860}
      />
      <MoreScoresEntry
        image={"dog"}
        position={17}
        name={"günther h."}
        title={"Faker"}
        score={1862}
      />
      <div className="gradient" />
    </div>
  );
}
