import React from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./Orders.css";
import { CiExport } from "react-icons/ci";
import * as XLSX from "xlsx";

export const Orders = ({ rows, deleteRow, editRow }) => {
  const handleExport = () => {
    // Convert table data to worksheet
    const ws = XLSX.utils.json_to_sheet(rows);

    // Create workbook and add the worksheet
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Orders");

    // Save the workbook as an Excel file
    XLSX.writeFile(wb, "orders.xlsx");
  };
  return (
    <div className="table-wrapper">
      <h1>Order Details</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th className="expand">Description</th>
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
                <td>{row.Orderid}</td>
                <td>{row.oname}</td>
                <td>{row.quantity}</td>
                <td>{row.price}</td>
                <td>{row.description}</td>
                <td>
                  <span className={`label label-${row.status}`}>
                    {statusText}
                  </span>
                </td>
                <td className="fit">
                  <span className="actions">
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(idx)}
                    />
                    <BsFillPencilFill
                      className="edit-btn"
                      onClick={() => editRow(idx)}
                    />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <CiExport onClick={handleExport} className="Orderexport-btn" />
    </div>
  );
};

export default Orders;

