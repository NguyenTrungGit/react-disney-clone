/* eslint-disable*/
import styled from "styled-components";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = (props) => {
  let setting = {
    dots: true,
    Infinite: true,
    speed: 500,
    slidesToShow: 1,
    slideToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...setting}>
      <Wrap>
        <a>
          <img src="/images/slider-badging.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/slider-scale.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/slider-badag.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/slider-scales.jpg" alt="" />
        </a>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 1.25rem;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease;
    }
  }

  ul li button {
    &:before {
      font-size: 0.625rem;
      color: rgb(150, 150, 171);
    }
  }

  li.slick-active button::before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -5rem;
  }

  .slick-next {
    right: -5rem;
  }
`;

const Wrap = styled.div`
  border-radius: 0.25rem;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 0.25rem;
    box-shadow: rgb(0 0 0/ 69%) 0px 26px 30px -10px,
      rgb(0 0 0/ 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    padding: 0.25rem;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border: 0.25rem solid rgba(249, 249, 249, 0.8);
      transition-duration: 0.3s;
    }
  }
`;

export default ImgSlider;

/* eslint-disable*/
