import React from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import "./Employees.css";

import * as XLSX from "xlsx";
import { CiExport } from "react-icons/ci";

export const Employees = ({ rows, deleteRow, editRow }) => {
  const handleExport = () => {
    // Convert table data to worksheet
    const ws = XLSX.utils.json_to_sheet(rows);

    // Create workbook and add the worksheet
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Employees");

    // Save the workbook as an Excel file
    XLSX.writeFile(wb, "employees.xlsx");
  };
  return (
    <div className="Emptable-wrapper">
      <h1>Employee Details</h1>
      <table className="Emptable">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Salary</th>
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
                <td>{row.salary}</td>
                <td className="expand">{row.description}</td>
                <td>
                  <span className={`label label-${row.status}`}>
                    {statusText}
                  </span>
                </td>
                {/* <td className="fit">
                  {" "}
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
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
      <CiExport onClick={handleExport} className="export-btn" />
    </div>
  );
};

export default Employees;

// import React from "react";
// import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
// import "./Employees.css";
// import * as XLSX from "xlsx";
// import { CiExport } from "react-icons/ci";

// const Employees = ({ rows, deleteRow, editRow }) => {
//   const handleExport = () => {
//     // Convert table data to worksheet
//     const ws = XLSX.utils.json_to_sheet(rows);

//     // Create workbook and add the worksheet
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Employees");

//     // Save the workbook as an Excel file
//     XLSX.writeFile(wb, "employees.xlsx");
//   };

//   return (
//     <div className="Emptable-wrapper">
//       <h1>Employee Details</h1>
//       <table className="Emptable">
//         <thead>
//           <tr>
//             <th>Employee ID</th>
//             <th>Name</th>
//             <th>Salary</th>
//             <th className="expand">Current Status</th>
//             <th className="act">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows.map((row, idx) => {
//             const statusText =
//               row.status.charAt(0).toUpperCase() + row.status.slice(1);

//             return (
//               <tr key={idx}>
//                 <td>{row.Employeeid}</td>
//                 <td>{row.name}</td>
//                 <td>{row.salary}</td>
//                 <td className="expand">{row.description}</td>
//                 <td>
//                   <span className={`label label-${row.status}`}>
//                     {statusText}
//                   </span>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <CiExport onClick={handleExport} className="export-btn" />

//       {/* <button onClick={handleExport} className="export-btn"> */}
//       {/* Export
//       </button> */}
//     </div>
//   );
// };

// export default Employees;
