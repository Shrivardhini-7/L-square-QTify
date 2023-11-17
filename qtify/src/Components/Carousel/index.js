import "./carousel.css";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import Card from "../Card";
import { ReactComponent as LeftNav } from "./leftnav.svg";
import { ReactComponent as RightNav } from "./rightnav.svg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

let Carousel = ({ data }) => {
  return (
    <div className="carousel-section">
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        //onSwiper={setSwiperRef}
        slidesPerView={7}
        spaceBetween={30}
        // pagination={{
        //   type: "fraction",
        // }}
        navigation={{ nextEl: ".right-nav", prevEl: ".left-nav" }}
        virtual
        parallax="true"
      >
        {data.map((cardData) => (
          <SwiperSlide key={cardData.id}>
            <Card
              imgSrc={cardData.image}
              noOfFollowers={cardData.follows}
              label={cardData.title}
            ></Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="left-nav nav">
        <img src="leftnav.png" alt="leftnav" />
      </div>
      <div className="right-nav nav">
        <img src="rightnav.png" alt="rightnav" />
      </div>
    </div>
  );
};

export default Carousel;
