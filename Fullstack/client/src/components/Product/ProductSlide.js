import React, { memo, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import "index.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import ProductItem from "./ProductItem";

const ProductSlide = ({ dataSlider, isNew, normal }) => {
  return (

    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      navigation={true}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper mt-5"
    >
      {dataSlider?.map((product) => {
        return <SwiperSlide key={product._id}>
          <ProductItem product={product} isNew={isNew} normal={normal} />
        </SwiperSlide>
      })}
    </Swiper>

  );
}

export default memo(ProductSlide)
