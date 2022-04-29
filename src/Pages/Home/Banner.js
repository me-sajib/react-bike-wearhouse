import React from "react";
import banner1 from "./images/banner1.png";
import banner2 from "./images/banner2.jpg";
import banner3 from "./images/banner3.jpg";
import "./css/Banner.css";

const Banner = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={banner1}
              class="d-block w-100 img-fluid"
              alt="banner-img"
            />
          </div>
          <div class="carousel-item">
            <img
              src={banner2}
              class="d-block w-100 img-fluid"
              alt="banner-img"
            />
          </div>
          <div class="carousel-item">
            <img src={banner3} class="d-block w-100 img-fluid" alt="banner" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
