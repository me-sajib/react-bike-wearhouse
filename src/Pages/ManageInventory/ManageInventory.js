import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Shared/Spinner";
import Inventory from "./Inventory";

const ManageInventory = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = React.useState(true);

  // load data from API
  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, []);
  let id = 1;
  return (
    <div className="bg-dark">
      <div className="container text-light py-5">
        <Link to="/addItem" className="btn btn-primary">
          {" "}
          add new item
        </Link>
        <table class="table table-light mt-3 table-striped table-responsive table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">NAME</th>
              <th scope="col">PRICE</th>
              <th scope="col">QUANTITY</th>
              <th scope="col">DESCRIPTION</th>
              <th scope="col">SPILLER</th>
              <th scope="col">IMG</th>
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody className="table-hover">
            {
              //    if loading is true, show spinner
              loading && <Spinner />
            }
            {
              //    show all inventory
              items.map((item) => (
                <Inventory key={item._id} id={id++} item={item} />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageInventory;
