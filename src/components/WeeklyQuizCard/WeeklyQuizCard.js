import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function WeeklyQuizCard() {
  const [visible, setVisible] = React.useState("");
  const [randomColor, setRandomColor] = React.useState(null);

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  React.useEffect(() => {
    if (inView) {
      setVisible("animation-visible");
    }
  }, [inView]);

  const currentDate = new Date();

  const monthNames = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ];

  const currentWeek =
    getMonday(currentDate).dayString +
    ". " +
    getMonday(currentDate).monthString +
    " - " +
    getSunday(currentDate).dayString +
    ". " +
    getSunday(currentDate).monthString;

  const currentYear = currentDate.getFullYear().toString();

  function getMonday(d) {
    var day = d.getDay();
    var date = new Date(
      d.getFullYear(),
      d.getMonth(),
      d.getDate() + (day === 0 ? -6 : 1) - day
    );

    var dayString = date.toString().slice(8, 10);
    var monthString = monthNames[date.getMonth()];

    return { dayString, monthString };
  }

  function getSunday(d) {
    var day = d.getDay();
    var date = new Date(
      d.getFullYear(),
      d.getMonth(),
      d.getDate() + (day === 0 ? 0 : 7) - day
    );

    var dayString = date.toString().slice(8, 10);
    var monthString = monthNames[date.getMonth()];

    return { dayString, monthString };
  }

  const colorSchemes = [
    "yellow-gradient",
    "purple-gradient",
    "pink-gradient",
    "green-gradient",
  ];

  React.useEffect(() => {
    setRandomColor(
      colorSchemes[Math.floor(Math.random() * colorSchemes.length)]
    );
    // eslint-disable-next-line
  }, []);

  return (
    <motion.div
      whileTap={{
        y: "3px",
        transition: { duration: 0.2, delay: 0, ease: "easeOut" },
      }}
      className={
        "weekly-quiz-card scroll-animation " + randomColor + " " + visible
      }
      ref={ref}
    >
      <div className={"year-number"}>{currentYear}</div>
      <div className={"content"}>
        <div className={"top"}>
          <div className={"week"}>{currentWeek}</div>
          <div className={"title"}>Quiz der Woche</div>
        </div>
        <Link to={"/quiz"}>
          <button className={"button big"}>Spielen</button>
        </Link>
      </div>
    </motion.div>
  );
}
