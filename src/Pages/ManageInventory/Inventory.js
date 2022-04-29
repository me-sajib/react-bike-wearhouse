import React from "react";
import "./css/Inventory.css";

const Inventory = ({ item, id }) => {
  const { name, price, quantity, description, supplier, image, _id } = item;
  return (
    <tr>
      <th scope="row">{id++}</th>
      <td>{name}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{description.slice(0, 70) + "..."}</td>
      <td>{supplier}</td>
      <td>
        <img src={image} className="img-fluid table-image" alt="" />
      </td>
      <td>delete</td>
    </tr>
  );
};

export default Inventory;
