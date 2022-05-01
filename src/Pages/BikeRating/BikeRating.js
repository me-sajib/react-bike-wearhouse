import React from "react";
import "./css/BikeRating.css";
const BikeRating = () => {
  return (
    <div className="bike-rating ">
      <div className="bg-text">
        <div className="container text-white">
          <div className="row row-cols-1 my-5 row-cols-md-3 g-3">
            <div className="col">
              <div className="">
                <h2>
                  <i class="fa-solid fa-user"></i>
                </h2>
                <h1>30+</h1>
              </div>
            </div>
            <div className="col">
              <div className="">
                <h2>
                  <i class="fa-solid fa-users"></i>
                </h2>
                <h1>9000+</h1>
              </div>
            </div>
            <div className="col">
              <div className="">
                <h1>
                  <i class="fa-solid fa-motorcycle"></i>
                </h1>
                <h2>300+</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeRating;
