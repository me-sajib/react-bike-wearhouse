import React from "react";
import "./css/Inventory.css";

const Inventory = ({ item, id, deleteItem }) => {
  const { name, price, _id } = item;
  return (
    <tr>
      <th scope="row">{id++}</th>
      <td>{name}</td>
      <td>{price}</td>

      <td>
        <button className="btn btn-danger" onClick={() => deleteItem(_id)}>
          {" "}
          <i className="fa-solid fa-trash-can"></i>{" "}
        </button>
      </td>
    </tr>
  );
};

export default Inventory;
