import React, { useState } from "react";
import "./Omodal.css";

export const Omodal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      Orderid: "",
      oname: "",
      description: "",
      status: "active",
      quantity: "",
      price: "",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (
      formState.Orderid &&
      formState.oname &&
      formState.description &&
      formState.status &&
      formState.quantity &&
      formState.price
    ) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="Orderid">Order ID</label>
            <input
              name="Orderid"
              onChange={handleChange}
              value={formState.Orderid}
            />
          </div>
          <div className="form-group">
            <label htmlFor="oname">Item</label>
            <input
              name="oname"
              onChange={handleChange}
              value={formState.oname}
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input
              name="quantity"
              onChange={handleChange}
              value={formState.quantity}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              name="price"
              onChange={handleChange}
              value={formState.price}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              onChange={handleChange}
              value={formState.description}
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Current Status</label>
            <select
              name="status"
              onChange={handleChange}
              value={formState.status}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="error">Error</option>
            </select>
          </div>
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
