import React from "react";
import { useInView } from "react-intersection-observer";

export default function ResultsStats(props) {
  const [visible, setVisible] = React.useState("");
  const [posWidth, setPosWidth] = React.useState(0);
  const [negWidth, setNegWidth] = React.useState(0);

  const [ref, inView] = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      setVisible("animation-visible");
      setPosWidth(props.posPercentStat);
      setNegWidth(100 - props.posPercentStat);
    } else {
      setVisible("");
      setPosWidth(0);
      setNegWidth(0);
    }
  }, [inView, props.posPercentStat]);

  return (
    <div className={"results-stats scroll-animation " + visible} ref={ref}>
      <h5 className="title">Bisherige Antworten</h5>
      <div className="bar-wrapper positive">
        <div className="bar" style={{ width: posWidth + "%" }} />
        <div className="text-wrapper">
          <div className="percentage">{props.posPercentStat}%</div>
          <div className="answered">Wählten "Stimmt"</div>
        </div>
      </div>
      <div className="bar-wrapper negative">
        <div className="bar" style={{ width: negWidth + "%" }} />
        <div className="text-wrapper">
          <div className="percentage">{100 - props.posPercentStat}%</div>
          <div className="answered">Wählten "Stimmt nicht"</div>
        </div>
      </div>
    </div>
  );
}
