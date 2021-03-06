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
import clip4 from "../../assets/start/rightanswer.mov";
import poster4 from "../../assets/start/rightanswer.jpg";
import clip5 from "../../assets/start/wronganswer.mov";
import SlideContent from "./SlideContent";
import { ReactComponent as Logo } from "../../assets/correctiv-weekly.svg";

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
          <div className="welcome">
            <div className="big">
              Wilkommen bei Correctiv Weekly!
              <br />
              <br />
              Das Quiz über aktuelle Nachrichten
            </div>
            <motion.div
              initial={{ x: "5px", opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { delay: 2, duration: 0.75 },
              }}
              className="tip"
            >
              Wischen zum Fortsetzen {">"}
            </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent
            source={clip1}
            poster={poster1}
            text={"Benutze Donats, um Fragen freizuschalten."}
            tip={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent
            source={clip2}
            poster={poster2}
            text={"Wische rechts oder links um Fragen zu beantworten."}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent
            source={clip4}
            poster={poster4}
            text={"Antwortest Du richtig, behälst Du den Donat."}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent
            source={clip5}
            poster={poster4}
            text={"Antwortest Du falsch, verlierst Du einen Donat."}
          />
        </SwiperSlide>
        <SwiperSlide className="last-slide">
          <div className="logo-container">
            <Logo />
            <div className="subline">Check Deine Realität!</div>
          </div>
          <h1>Alles klar?</h1>
          <Link to={"/home"}>
            <button className="big">Los Gehts!</button>
          </Link>
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
}
