import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./styles.css";

import { EffectCube, Pagination } from "swiper";

import omabaflat from "../../imgs/obama.png"

const Obamid = () => {
  return (
    <div>
      <Swiper
        effect="cube"
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={omabaflat} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={omabaflat} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={omabaflat} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={omabaflat} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Obamid;