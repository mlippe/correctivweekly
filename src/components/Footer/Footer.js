import React from "react";
import { useInView } from "react-intersection-observer";

export default function Footer() {
  const [visible, setVisible] = React.useState("");

  const [ref, inView] = useInView({
    threshold: 0
  });

  React.useEffect(() => {
    if (inView) {
      setVisible("animation-visible");
    }
  }, [inView]);

  return (
    <div className={"footer scroll-animation " + visible} ref={ref}>
      <div className={"text"}>
        Made with{" "}
        <span role="img" aria-label="heart-icon">
          ❤️
        </span>{" "}
        by CORRECTIV.ORG
      </div>
      <a
        href="https://www.correctiv.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="small">Webseite besuchen</button>
      </a>
    </div>
  );
}
