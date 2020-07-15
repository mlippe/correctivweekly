import React from "react";
import ProfileStat from "./ProfileStat";
import { useInView } from "react-intersection-observer";

export default function ProfileStatWrapper() {
  const [visible, setVisible] = React.useState("");

  const [ref, inView] = useInView({
    threshold: 0.5
  });

  React.useEffect(() => {
    if (inView) {
      setVisible("animation-visible");
    }
  }, [inView]);

  return (
    <div
      className={"profile-stat-wrapper scroll-animation " + visible}
      ref={ref}
    >
      <h1>Statistik</h1>
      <div className="stat-container">
        <div className="row">
          <ProfileStat number={142} subtitle={"Gesamtscore"} />
          <ProfileStat
            number={27}
            numberAppendix={"#"}
            subtitle={"Rangliste"}
          />
        </div>
        <div className="row">
          <ProfileStat number={167} subtitle={"Fragen beantwortet"} />
          <ProfileStat
            number={25}
            numberAppendix={"€"}
            subtitle={"Insgesamt gespendet"}
          />
        </div>
      </div>
    </div>
  );
}
