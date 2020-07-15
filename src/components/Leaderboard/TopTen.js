import React from "react";
import { useInView } from "react-intersection-observer";
import TopTenEntry from "./TopTenEntry";

export default function TopTen() {
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
    <div className={"top-ten scroll-animation " + visible} ref={ref}>
      <h1>Top Ten</h1>
      <TopTenEntry />
      <TopTenEntry
        image={"ball"}
        position={2}
        name={"chris m."}
        title={"Nachrichtenkenner"}
        score={2436}
        donated={"145 €"}
      />
      <TopTenEntry
        image={"dog"}
        position={3}
        name={"nduja c."}
        title={"Morgenpostbreater"}
        score={2212}
        donated={"170 €"}
      />
      <TopTenEntry
        image={"ball"}
        position={4}
        name={"miriam f."}
        title={"Orakel"}
        score={2129}
        donated={"20 €"}
      />
      <TopTenEntry
        position={5}
        name={"hannes b."}
        title={"Nachrichtenkenner"}
        score={2106}
        donated={"345 €"}
      />
      <TopTenEntry
        position={6}
        name={"larissa s."}
        title={"Faker"}
        score={2054}
        donated={"80 €"}
      />
      <TopTenEntry
        image={"ball"}
        position={7}
        name={"otto m."}
        title={"Morgenpostbreater"}
        score={1966}
        donated={"45 €"}
      />
      <TopTenEntry
        image={"dog"}
        position={8}
        name={"alex p."}
        title={"Wahrheitssuchender"}
        score={1912}
        donated={"100 €"}
      />
      <TopTenEntry
        position={9}
        name={"sarah r."}
        title={"Orakel"}
        score={1889}
        donated={"145 €"}
      />
      <TopTenEntry
        image={"ball"}
        position={10}
        name={"Viko z."}
        title={"Morgenpostberater"}
        score={1886}
        donated={"10 €"}
      />
    </div>
  );
}
