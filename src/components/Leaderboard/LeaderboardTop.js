import React from "react";
import { useInView } from "react-intersection-observer";

import leaderboard from "../../assets/leaderboard.png";

export default function LeaderboardTop() {
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
    <div className={"leaderboard-top scroll-animation " + visible} ref={ref}>
      <img src={leaderboard} alt="user icon" />
    </div>
  );
}
