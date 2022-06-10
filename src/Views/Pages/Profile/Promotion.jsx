import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slide1 from '../../../assets/images/so_chicken.jpg'
import slide2 from '../../../assets/images/so_pizza.jpg'
import slide3 from '../../../assets/images/so_burger.jpg'
const Promotion = () => {
    return (
        <div>
            <Swiper
                pagination={{
                dynamicBullets: true,
                }}
                modules={[Pagination]}
                className = 'h-60 w-full'
            >
                <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Promotion;