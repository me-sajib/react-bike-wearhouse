import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Item from "../Home/Item";
import Spinner from "../Shared/Spinner";
import "./css/UserItem.css";

const MyItem = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user] = useAuthState(auth);

  //   load my item
  useEffect(() => {
    async function getItem() {
      try {
        if (user?.email) {
          const uri = `http://localhost:5000/userItem/${user.email}`;
          const { data } = await axios.get(uri, {
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          setItems(data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getItem();
    setLoading(false);
  }, [loading]);

  return (
    <div className="bg-dark my-item py-5 light-border">
      <div className="container">
        {items.length > 0 ? (
          <h1 className="text-center text-primary">
            YOU ADDED <b className="text-light">{items.length}</b> ITEM
          </h1>
        ) : (
          <h1 className="no-item text-center py-3 text-danger">0</h1>
        )}

        <div className="row">
          {loading && <Spinner />}
          {items.length < 1 && (
            <h3 className="text-center text-danger py-5">
              You have not added any items
            </h3>
          )}
          <div className="row row-cols-1 my-5 row-cols-md-2 g-4">
            {items.length > 0 &&
              items.map((item) => <Item key={item._id} item={item} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyItem;
