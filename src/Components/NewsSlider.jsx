import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import CardComponent from './CardComponent';

export default function NewsSlider() {
  return (
    <>
    <div className='px-6'>

   
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
       
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>{<CardComponent/>}</SwiperSlide>
        <SwiperSlide>{<CardComponent/>}</SwiperSlide>
        <SwiperSlide>{<CardComponent/>}</SwiperSlide>
        <SwiperSlide>{<CardComponent/>}</SwiperSlide>
        <SwiperSlide>{<CardComponent/>}</SwiperSlide>
        <SwiperSlide>{<CardComponent/>}</SwiperSlide>
        <SwiperSlide>{<CardComponent/>}</SwiperSlide>
        <SwiperSlide>{<CardComponent/>}</SwiperSlide>
        <SwiperSlide>{<CardComponent/>}</SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
