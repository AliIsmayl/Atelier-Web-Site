import React from "react";
import "./ExploreElegance.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css/core";

function ExploreElegance() {
  const splideOptions = {
    type: "loop",
    perPage: 4,
    perMove: 1,
    arrows: false,
    pauseOnHover: true,
    labelledby: "carousel-heading",
    pagination: false,
    drag: "free",
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
    <section id="exploreElegance">
      <Splide
        options={splideOptions}
        extensions={{ AutoScroll }}
        aria-labelledby="carousel-heading"
      >
        <SplideSlide>
          <div className="card">EXPLORE ELEGANCE</div>
        </SplideSlide>
        <SplideSlide>
          <div className="card">EXPLORE ELEGANCE</div>
        </SplideSlide>
        <SplideSlide>
          <div className="card">EXPLORE ELEGANCE</div>
        </SplideSlide>
      </Splide>
    </section>
  );
}

export default ExploreElegance;
