import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Header from "../Header";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styled.css";

import IconM1 from "../../assets/slider/icon-m1.webp";
import IconM2 from "../../assets/slider/icon-m2.webp";
import IconM3 from "../../assets/slider/icon-m3.webp";

import { Parallax, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div className="root_Slider">
      <Swiper
        slidesPerView={1}
        pagination={{
          dynamicBullets: true,
        }}
        speed={600}
        navigation={true}
        parallax={true}
        modules={[Parallax, Pagination, Navigation]}
        className="custom-swiper"
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="slide_1_element">
            <div className="box_Slide">
              <p className="box_Slide_title">
                СТРОИМ КОМФОРТНЫЕ <br />
                ДОМА ДЛЯ ЖИЗНИ
              </p>
              <p className="box_Slide_Subtitle">
                Дом - это то место, где человек <br />
                проводит большую часть своего времени
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_2_element">
            <div className="box_Slide">
              <p className="box_Slide_title">
                Проект: <br />
                РИМИНИ
              </p>
              <div className={"param_box_Slider"}>
                <div className={"param_element_Slider"}>
                  <p className={"param_text_Slider"}>{"245 кв.м"}</p>
                  <img className={"param-img_Slider"} src={IconM1} />
                </div>
                <div className={"param_element_Slider"}>
                  <p className={"param_text_Slider"}>{"2 С/У"}</p>
                  <img className={"param-img_Slider"} src={IconM2} />
                </div>
                <div className={"param_element_Slider"}>
                  <p className={"param_text_Slider"}>{"4 шт."}</p>
                  <img className={"param-img_Slider"} src={IconM3} />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_3_element">
            <div className="box_Slide">
              <p className="box_Slide_title">
                Проект: <br />
                ЗАГОРОД
              </p>
              <div className={"param_box_Slider"}>
                <div className={"param_element_Slider"}>
                  <p className={"param_text_Slider"}>{"95 кв.м"}</p>
                  <img className={"param-img_Slider"} src={IconM1} />
                </div>
                <div className={"param_element_Slider"}>
                  <p className={"param_text_Slider"}>{"1 С/У"}</p>
                  <img className={"param-img_Slider"} src={IconM2} />
                </div>
                <div className={"param_element_Slider"}>
                  <p className={"param_text_Slider"}>{"3 шт."}</p>
                  <img className={"param-img_Slider"} src={IconM3} />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_4_element">
            <div className="box_Slide">
              <p className="box_Slide_title">
                Проект: <br />
                СКАНДИНАВИЯ
              </p>
              <div className={"param_box_Slider"}>
                <div className={"param_element_Slider"}>
                  <p className={"param_text_Slider"}>{"172 кв.м"}</p>
                  <img className={"param-img_Slider"} src={IconM1} />
                </div>
                <div className={"param_element_Slider"}>
                  <p className={"param_text_Slider"}>{"2 С/У"}</p>
                  <img className={"param-img_Slider"} src={IconM2} />
                </div>
                <div className={"param_element_Slider"}>
                  <p className={"param_text_Slider"}>{"4 шт."}</p>
                  <img className={"param-img_Slider"} src={IconM3} />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
