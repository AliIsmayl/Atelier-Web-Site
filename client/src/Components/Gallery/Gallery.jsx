import React from "react";
import "./Gallery.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css/core";
import Imag1 from "../../Image/Image1.jpg";
import Imag2 from "../../Image/Image2.jpg";
import Imag3 from "../../Image/Image3.jpg";
import Imag4 from "../../Image/Image4.jpg";
import Imag5 from "../../Image/Image5.jpg";
import Imag6 from "../../Image/Image6.jpg";
import Imag7 from "../../Image/Image7.jpg";
import Imag8 from "../../Image/Image8.jpg";
import Imag9 from "../../Image/Image9.jpg";

function Gallery() {
  const splideOptions = {
    type: "loop",
    perPage: 4,
    perMove: 1,
    arrows: false,
    // autoStart: true,
    // autoplay: true,
    // interval: 5000,
    // speed: 10000,
    pauseOnHover: true,
    // resetProgress: false,
    // rewind:true,
    labelledby: "carousel-heading",
    pagination: false,
    drag: "free",
    // focus:'center',
    fixedHeight: "80px",
    breakpoints: {
      991: {
        perPage: 3,
      },
      768: {
        perPage: 2,
      },
      480: {
        perPage: 1,
      },
    },
    autoScroll: {
      speed: 1,
    },
  };
  return (
    <section id="gallery">
      <div className="text1">GALLERY</div>
      <div className="text2">
        <Splide
          options={splideOptions}
          extensions={{ AutoScroll }}
          aria-labelledby="carousel-heading"
        >
          <SplideSlide>
            <div className="card">
              <img src={Imag1} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="card">
              <img src={Imag2} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="card">
              <img src={Imag3} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="card">
              <img src={Imag4} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="card">
              <img src={Imag5} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="card">
              <img src={Imag6} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="card">
              <img src={Imag7} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="card">
              <img src={Imag8} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="card">
              <img src={Imag9} alt="" />
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
}

export default Gallery;
