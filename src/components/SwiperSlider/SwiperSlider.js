import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ImageOne from '../../images/1.jpg';
import ImageTwo from '../../images/2.jpg';
import ImageThree from '../../images/3.jpg';
import ImageFour from '../../images/4.jpg';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import './SwiperSlider.css';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function App() {
  return (
    <div className="haderSwiper">
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img style={{ width: '300px' }} src={ImageOne} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: '300px' }} src={ImageTwo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: '300px' }} src={ImageThree} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: '300px' }} src={ImageFour} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}