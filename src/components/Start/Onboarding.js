import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

import clip1 from "../../assets/start/dragdonat.mov";
import poster1 from "../../assets/start/dragdonat.jpg";
import clip2 from "../../assets/start/leftright.mov";
import poster2 from "../../assets/start/leftright.jpg";
import clip3 from "../../assets/start/results.mov";
import poster3 from "../../assets/start/results.jpg";
import clip4 from "../../assets/start/rightanswer.mov";
import poster4 from "../../assets/start/rightanswer.jpg";
import clip5 from "../../assets/start/wronganswer.mov";
import SlideContent from "./SlideContent";

SwiperCore.use([Pagination]);

export default function Onboarding(props) {
  function slideChangeHandler(event) {
    if (event.activeIndex === event.slides.length - 1) {
      props.setLastSlide(true);
    } else {
      props.setLastSlide(false);
    }
  }

  return (
    <motion.div
      className="onboarding"
      initial={{ y: "50%", opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.3,
          type: "spring",
          stiffness: 200,
          damping: 20,
        },
      }}
    >
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(event) => slideChangeHandler(event)}
        onSlideChange={(event) => slideChangeHandler(event)}
      >
        <SwiperSlide>
          <SlideContent
            source={clip1}
            text={"Schalte Fragenkarten mit Donats frei."}
            tip={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent
            source={clip2}
            text={"Wische rechts oder links um Fragen zu beantworten."}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent
            source={clip3}
            text={"Nach Deiner Antwort bekommst du Infos zur Frage."}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent
            source={clip4}
            text={"Antwortest Du richtig, behälst Du deinen Donat."}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent
            source={clip5}
            text={"Antwortest Du falsch, verlierst Du deinen Donat."}
          />
        </SwiperSlide>
        <SwiperSlide className="last-slide">
          <h1>Alles klar?</h1>
          <Link to={"/home"}>
            <button className="big">Los Gehts!</button>
          </Link>
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
}
