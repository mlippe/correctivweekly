import React from "react";
import { useInView } from "react-intersection-observer";

import user from "../../assets/user1.png";

export default function ProfileTop() {
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
    <div className={"profile-top scroll-animation " + visible} ref={ref}>
      <img src={user} alt="user icon" />
      <div className="user-name">Anja K.</div>
      <div className="user-title">Wahrheitssuchende</div>
      <button className="small">Profil bearbeiten</button>
    </div>
  );
}
