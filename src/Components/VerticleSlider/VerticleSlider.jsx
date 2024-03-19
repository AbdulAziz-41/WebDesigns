import React, { Component } from "react";
import Slider from "react-slick";
import reverse from "../../assets/Svg/reverse.svg";
import slide1 from "../../assets/images/slide1.png";
import leftarrow from "../../assets/Svg/leftarrow.svg";
import rightArrow from "../../assets/Svg/rightArrow.svg";
function VerticalMode() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <div>
          <li className="relative p-14 bg-white list-none">
            <img className="absolute top-5 right-[19px]" src={reverse} alt="" />
            <div className="flex flex-col">
              <img
                className="max-w-[139.16px] max-h-[76.54px]"
                src={slide1}
                alt=""
              />
              <div className="pt-[33.56px] w-full flex text-left gap-x-14">
                <div>
                  <h1 className="text-[32px] font-semibold leading-[44.8px] text-nowrap">
                    The Little Mermaid
                  </h1>
                </div>
                <div>
                  <h1>ANNUALIZED NET RETURN</h1>
                  <h1 className="text-[20px] leading-[36px] text-nowrap">
                    <span className="text-[52px] font-semibold leading-[93px]">
                      64.0%
                    </span>{" "}
                    378 days held
                  </h1>
                </div>
              </div>
            </div>
          </li>
        </div>
      </Slider>
    </div>
  );
}

export default VerticalMode;
