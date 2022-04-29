import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const { _id, name, image, supplier, price, description, quantity } = item;

  return (
    <div className="col">
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            price:
            <i> {price}</i>
          </p>
          <p className="card-text">
            supplier:
            <i> {supplier}</i>
          </p>
          <p className="cart-text">Quantity: {quantity}</p>
          <Link to={`/checkItem/${_id}`} className="btn btn-primary">
            UPDATE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
