import React from "react";
import BikeRating from "../BikeRating/BikeRating";
import Banner from "./Banner";
import Items from "./Items";

const Home = () => {
  return (
    <div>
      <Banner />
      <Items />
      <BikeRating />
    </div>
  );
};

export default Home;
