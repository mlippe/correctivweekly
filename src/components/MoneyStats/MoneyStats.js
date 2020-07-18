import React from "react";
import Odometer from "react-odometerjs";
import ImpactArticle from "./ImpactArticle";
import { useInView } from "react-intersection-observer";

export default function MoneyStats() {
  const [totalMoney, setTotalMoney] = React.useState(0);
  const [visible, setVisible] = React.useState("");

  const [ref, inView] = useInView({
    threshold: 0,
    rootMargin: "0px 0px -10% 0px",
  });

  React.useEffect(() => {
    if (inView) {
      setTotalMoney(13723);
      setVisible("animation-visible");
    }
  }, [inView]);

  return (
    <div className={"money-stats scroll-animation " + visible} ref={ref}>
      <div className={"total-number-wrap"}>
        <Odometer
          value={totalMoney}
          format="(,ddd)"
          theme="minimal"
          animation="count"
          duration={"2000"}
        />
        <span className="currency">€</span>
      </div>
      <h4>
        wurden bisher durch dieses Quiz gesammelt.
        <br />
        <br />
        Das konnte Correctiv.org durch die zusätzliche Finanzierung bewirken:
      </h4>
      <ImpactArticle
        date={"November 2019"}
        headline={"CumEx-Skandal"}
        impact={
          "Impact: Im November 2019 kündigte das Bundesfinanzministerium die Gründung einer Spezialeinheit für den Kampf gegen groß angelegten Steuerbetrug mit. Die beim Bundeszentralamt für Steuern angesiedelte Einheit soll mit 48 Stellen ausgestattet sein. Nach Veröffentlichung der Recherche Cum-Ex Files im Oktober 2018 hatte Finanzminister Olaf Scholz angekündigt, stärker gegen den Betrug vorzugehen."
        }
        link={"https://cumex-files.com/"}
      />
      <ImpactArticle
        date={"April 2019"}
        headline={"AfD-Spendenskandal"}
        impact={
          "Die Bundestagsverwaltung hat auf Grundlage von CORRECTIV-Recherchen Strafzahlungen in Höhe von 402.900 Euro verhängt. Wahlkampfspenden an die AfD-Spitzenkandidaten für die Europawahl Guido Reil und Jörg Meuthen aus den Jahren 2017 bzw. 2016 waren illegal. CORRECTIV hatte zunächst den Fall Guido Reil aufgedeckt. Dieser führte dazu, dass auch der zweite Fall um Jörg Meuthen dank einer gemeinsamen Recherche mit Frontal21 publik wurde."
        }
        link={
          "https://correctiv.org/aktuelles/2020/06/11/hessen-untersuchungsausschuss-zum-luebcke-mord-soll-in-kuerze-starten-auch-offene-fragen-zum-nsu-sollen-behandelt-werden"
        }
      />
      <ImpactArticle
        date={"April 2019"}
        headline={"Korruptionsvorwürfe gegen europäische Konzerne in Venezuela"}
        impact={
          "Unsere Recherche deckte Korruptionsvorwürfe im Zusammenhang mit der Modernisierung eines Wasserkraftwerks in Venezuela auf. Die Vorwürfe richten sich vor allem gegen den österreichischen Anlagenbauer Andritz. Die Recherche und ihr erhebliches Medienecho in Österreich zwang den Konzern dazu einzuräumen, dass man bei einer früheren Prüfung der Venezuela-Geschäfte Bestechung nicht habe ausschließen können."
        }
        link={
          "https://correctiv.org/top-stories/2019/04/10/wenn-die-lichter-ausgehen/"
        }
      />
    </div>
  );
}
