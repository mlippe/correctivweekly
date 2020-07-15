import React from "react";
import { useInView } from "react-intersection-observer";

import WeeklyQuizCard from "../components/WeeklyQuizCard/WeeklyQuizCard.js";
import QuizArchive from "../components/QuizArchive/QuizArchive.js";
import MoneyStats from "../components/MoneyStats/MoneyStats.js";
import Footer from "../components/Footer/Footer.js";

export default function Home() {
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
    <div className={"home-view"}>
      <h1 className={"scroll-animation " + visible} ref={ref}>
        Für weniger Drama in deinem Leben
      </h1>
      <WeeklyQuizCard />
      <QuizArchive />
      <MoneyStats />
      <Footer />
    </div>
  );
}
