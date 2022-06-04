import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper";
import Review from '../../Components/Review';


const Reviews = () => {
    return (
        <div className='py-20 bg-amber-50'>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                navigation={true}
                pagination= {{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    [...Array(4)].map((item, index) => <SwiperSlide key={index} className=""><Review /></SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Reviews;