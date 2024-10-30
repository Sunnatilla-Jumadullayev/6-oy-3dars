import { Swiper, SwiperSlide } from "swiper/react";
//swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// scss connect

import "./Swiper.scss";

// img

import rasm from "../../assets/lake.jpg";
import rasm1 from "../../assets/images1.jpeg";
import rasm2 from "../../assets/images2.jpg";

// import require modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import React from "react";
import Hero from "../hero/Hero";

const SWiper = () => {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper container"
      >
        <SwiperSlide>
          <img src={rasm} alt="salom" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rasm1} alt="salom" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rasm2} alt="salom" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper__main">
            <h1>assalom</h1>
            <h2>assalom</h2>
            <h3>assalom</h3>
            <h4>assalom</h4>
            <h5>assalom</h5>
            <h6>assalom</h6>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SWiper;
