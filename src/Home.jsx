import React from "react";
import Categories from "./Categories";
import first from "./images/1.jpg";
import second from "./images/2.jpg";
import third from "./images/3.jpg";
import Products from "./Products";
export default function Home() {
  return (
    <>
      <div id="carouselExample" className="carousel slide mb-5">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={first} className="d-block w-75 mx-auto" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={third} className="d-block w-75 mx-auto" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={second} className="d-block w-75 mx-auto" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div class="container">
        <div className="row">
          <Categories />
          <Products />
        </div>
      </div>
    </>
  );
}
