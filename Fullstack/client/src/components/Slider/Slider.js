// import React, { memo, useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import "index.css";

// // import required modules
// import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

// const Slider = ({ images, className, autoplay, navigation = false }) => {
//   return (
//     <section >
//       <Swiper
//         pagination={
//           { clickable: true, }
//         }
//         spaceBetween={30}
//         autoplay={autoplay && {
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         effect={"fade"}

//         loop={true}
//         navigation={navigation}
//         modules={[Autoplay, EffectFade, Navigation, Pagination]}
//         className="mySwiper"
//       >
//         {images?.map((el) => {
//           return <SwiperSlide key={el}>
//             <img className={className} src={el} alt="" />
//           </SwiperSlide>
//         })}


//       </Swiper>
//     </section>
//   );
// }
// export default memo(Slider);

