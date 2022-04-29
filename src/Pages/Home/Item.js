import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const { _id, name, image, description } = item;

  return (
    <div class="col">
      <div class="card">
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{description}</p>
          <Link to={`/checkItem/${_id}`} class="btn btn-primary">
            UPDATE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
