"use client";

import React, { useRef } from "react";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div >
      <h2 className="text-center mt-28 mb-16 font-bold ">My Work</h2>
      <Slider ref={sliderRef} {...settings} className="flex justify-center" >
        <div>
          <Image
            className="aspect-[4/3]  object-center"
            src="/assets/images/image-slide-1.jpg"
            alt="slide 1"
            width={450}
            height={400}
          />
        </div>
        <div>
          <Image 
            className="aspect-[4/3] object-center"
            src="/assets/images/image-slide-2.jpg"
            alt="slide 1"
            width={450}
            height={400}
          />
        </div>
        <div>
          <Image
            className="aspect-[4/3] object-center"
            src="/assets/images/image-slide-3.jpg"
            alt="slide 1"
            width={450}
            height={400}
          />
        </div>
        <div>
          <Image
            className="aspect-[4/3]  object-center"
            src="/assets/images/image-slide-4.jpg"
            alt="slide 1"
            width={450}
            height={400}
          />
        </div>
        <div>
          <Image
            className="aspect-[4/3]  object-fill"
            src="/assets/images/image-slide-5.jpg"
            alt="slide 1"
            width={450}
            height={400}
          />
        </div>
      </Slider>
      <div className="flex justify-center gap-3 mt-10 mb-24">
        <button
          className=" bg-[#000] hover:bg-[#785ede] p-5  text-white font-semibold rounded-full "
          onClick={previous}
        >
          <Image
            src="/assets/svg/icon-arrow-left.svg"
            alt="allow left"
            width={20}
            height={20}
          />
        </button>
        <button
          className=" bg-[#000] hover:bg-[#785ede] p-5 text-white font-semibold rounded-full "
          onClick={next}
        >
          <Image
            src="/assets/svg/icon-arrow-right.svg"
            alt="allow left"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
