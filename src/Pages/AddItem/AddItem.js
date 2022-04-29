import React from "react";

const AddItem = () => {
  return (
    <div className="bg-dark text-light py-5">
      <div className="container">
        <form>
          <div className="form-group mb-3">
            <label htmlFor="nameInput">Name</label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              name="name"
              placeholder="Enter item name"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="priceInput">Price</label>
            <input
              type="number"
              className="form-control"
              id="priceInput"
              name="price"
              placeholder="Enter item price"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="quantityInput">Quantity</label>
            <input
              type="number"
              className="form-control"
              id="quantityInput"
              name="quantity"
              placeholder="Enter item name"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="Description">Description</label>
            <input
              type="text"
              className="form-control"
              id="Description"
              name="name"
              placeholder="Enter item Description"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="details">Details Item</label>
            <textarea
              name="details"
              id="details"
              placeholder="enter your item details"
            ></textarea>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="image">Image URL</label>
            <input
              type="text"
              className="form-control"
              id="image"
              name="image"
              placeholder="Enter item image url"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="supplier">Supplier Name</label>
            <input
              type="text"
              className="form-control"
              id="supplier"
              name="name"
              placeholder="Enter item supplier name"
            />
          </div>
          <button className="btn btn-primary">ADD ITEM</button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
