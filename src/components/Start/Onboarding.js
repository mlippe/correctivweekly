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

SwiperCore.use([Pagination]);

export default function Onboarding(props) {
  function slideChangeHandler(event) {
    if (event.activeIndex === event.slides.length - 1) {
      props.setLastSlide(true);
      return;
    }

    props.setLastSlide(false);
    let currentVideo = event.slides[event.activeIndex].children[0].children[0];
    currentVideo.currentTime = 0;
    currentVideo.play();
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
          <div className="animation-wrap">
            <video loop muted poster={poster1}>
              <source src={clip1} type="video/mp4" />
            </video>
          </div>
          <div className="text-wrap">
            <h2>Schalte Fragenkarten mit Donats frei.</h2>
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="animation-wrap">
            <video loop muted poster={poster2}>
              <source src={clip2} type="video/mp4" />
            </video>
          </div>
          <div className="text-wrap">
            <h2>Wische rechts oder links um Fragen zu beantworten.</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="animation-wrap">
            <video loop muted poster={poster3}>
              <source src={clip3} type="video/mp4" />
            </video>
          </div>
          <div className="text-wrap">
            <h2>Nach Deiner Antwort bekommst du Infos zur Frage.</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="animation-wrap">
            <video loop muted poster={poster4}>
              <source src={clip4} type="video/mp4" />
            </video>
          </div>
          <div className="text-wrap">
            <h2>Antwortest Du richtig, behälst Du deinen Donat.</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="animation-wrap">
            <video loop muted poster={poster4}>
              <source src={clip5} type="video/mp4" />
            </video>
          </div>
          <div className="text-wrap">
            <h2>Antwortest Du falsch, verlierst Du deinen Donat.</h2>
          </div>
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
