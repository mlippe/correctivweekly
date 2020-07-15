import React from "react";
import { Link } from "react-router-dom";

export default function ArchiveCard(props) {
  const [randomColor, setRandomColor] = React.useState(null);

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
      d.getDate() + (day === 0 ? -6 : 1) - day - 7 * props.weeksBehind
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
      d.getDate() + (day === 0 ? 0 : 7) - day - 7 * props.weeksBehind
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
    <Link to={"/archived-quiz"}>
      <div className={"archive-card " + randomColor}>
        <div className={"year-number"}>{currentYear}</div>
        <div className={"week"}>{currentWeek}</div>
      </div>
    </Link>
  );
}

ArchiveCard.defaultProps = {
  weeksBehind: 1,
};
