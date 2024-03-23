import React from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import "./Employees.css";

export const Employees = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="table-wrapper">
      <h1>Employee Details</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th className="expand">Current Status</th>
            <th className="act">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            const statusText =
              row.status.charAt(0).toUpperCase() + row.status.slice(1);

            return (
              <tr key={idx}>
                <td>{row.Employeeid}</td>
                <td>{row.name}</td>
                <td className="expand">{row.description}</td>
                <td>
                  <span className={`label label-${row.status}`}>
                    {statusText}
                  </span>
                </td>
                {/* <td className="fit"> */}
                  {/* <span className="actions">
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(idx)}
                    />
                    <BsFillPencilFill
                      className="edit-btn"
                      onClick={() => editRow(idx)}
                    /> */}
                  {/* </span> */}
                {/* </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
