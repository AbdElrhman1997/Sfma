"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import Autoplay

const ImageSlider = ({ images }) => {
  // Refs for custom navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div
      style={{
        width: "100%",
        margin: "0 auto 60px auto",
        position: "relative",
      }}
    >
      {/* Custom arrows */}
      <button
        ref={nextRef}
        style={{
          position: "absolute",
          top: "112%",
          zIndex: 10,
          color: "#28a4a8",
          border: "none",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          cursor: "pointer",
          transform: "translateY(-50%)",
        }}
        className="md:left-[45%] left-[35%]"
      >
        <img src="/images/common/arrrow_right.png" alt="arrow_right" />
      </button>
      <button
        ref={prevRef}
        style={{
          position: "absolute",
          top: "112%",
          zIndex: 10,
          color: "#28a4a8",
          border: "none",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          cursor: "pointer",
          transform: "translateY(-50%)",
        }}
        className="md:right-[45%] right-[35%]"
      >
        <img src="/images/common/arrrow_left.png" alt="arrow_left" />
      </button>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Add Autoplay module
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{
          delay: 1400, // Delay between slides in milliseconds
          disableOnInteraction: false, // Autoplay will not stop after user interaction
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper: any) => {
          // Pass custom navigation elements to Swiper
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        loop
      >
        {images?.map((item, index) => (
          <>
            <SwiperSlide key={index}>
              <img
                src={`https://sffma.fmexcon.com/storage/${item?.image}`}
                alt={`Slide ${index + 1}`}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                }}
              />
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
