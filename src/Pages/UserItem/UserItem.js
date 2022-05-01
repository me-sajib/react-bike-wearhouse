import React from "react";

const UserItem = ({ item }) => {
  const { _id, name, image, supplier, price, description, quantity } = item;
  return (
    <div className="col text-light">
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <b> price:</b>
            <i> {price}</i>
          </p>
          <p className="card-text">
            <b> supplier:</b>
            <i> {supplier}</i>
          </p>
          <p className="cart-text">
            <b>Quantity:</b> {quantity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;