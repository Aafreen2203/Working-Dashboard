import React, { useState } from "react";
import "./Cmodal.css";

export const Cmodal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      Customerid: "",
      cname: "",
      description: "",
      status: "active",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (
      formState.Customerid &&
      formState.cname &&
      formState.description &&
      formState.status
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
            <label htmlFor="Customerid">Customer ID</label>
            <input
              name="Customerid"
              onChange={handleChange}
              value={formState.Customerid}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cname">Customer Name</label>
            <input
              name="cname"
              onChange={handleChange}
              value={formState.cname}
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
