import React, { useEffect, useState } from "react";
import Spinner from "../Shared/Spinner";
import Item from "./Item";

const Items = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // load data from API
  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
    setLoading(false);
  }, []);
  return (
    <div className="items bg-dark py-5">
      <div className="container">
        {/* top of the text */}
        <p className="text-center text-light py-2">
          <span>DISCOVER THE</span>
          <h1>BEST BIKE</h1>
        </p>

        {/* show the all items */}
        <div class="row row-cols-1 row-cols-md-2 g-4">
          {/* spinner show */}
          {loading && <Spinner />}
          {items.map((item) => (
            <Item key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
