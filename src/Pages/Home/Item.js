import React from "react";

const Item = ({ item }) => {
  const { name, image, description } = item;
  return (
    <div class="col">
      <div class="card">
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{description}</p>
          <button className="btn btn-dark">update</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
