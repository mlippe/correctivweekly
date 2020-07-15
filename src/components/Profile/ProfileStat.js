import React, { useEffect, useState } from "react";
import Odometer from "react-odometerjs";
import { useInView } from "react-intersection-observer";

export default function ProfileStat(props) {
  const [initialNumber, setInitialNumber] = useState(0);

  const [ref, inView] = useInView({
    threshold: 0.5
  });

  useEffect(() => {
    if (inView) {
      setInitialNumber(props.number);
    }
  }, [inView, props.number]);

  return (
    <div className={"profile-stat"} ref={ref}>
      <div className="odometer-container">
        {props.numberAppendix ? (
          <div className="number-appendix">{props.numberAppendix}</div>
        ) : null}
        <Odometer
          duration={"2000"}
          value={initialNumber}
          theme="minimal"
          animation="count"
        />
      </div>
      <div className="subtitle">{props.subtitle}</div>
    </div>
  );
}
