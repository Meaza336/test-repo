import React from react;
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const swipercomponent = () => {
  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
    // Add more image URLs as needed
  ];

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      navigation
      pagination={{ clickable: true }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Slide ${index}`} className="w-full h-auto" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default swipercomponent;