import React from "react";
import BikeRating from "../BikeRating/BikeRating";
import TopSeller from "../TopSeller/TopSeller";
import Banner from "./Banner";
import Items from "./Items";

const Home = () => {
  return (
    <div>
      <Banner />
      <Items />
      <BikeRating />
      <TopSeller />
    </div>
  );
};

export default Home;
