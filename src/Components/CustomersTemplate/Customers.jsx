// import React from "react";
// import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
// import "./Customers.css";

// export const Customers = ({ rows, deleteRow, editRow }) => {
//   return (
//     <div className="table-wrapper">
//       <h1>Customer Details</h1>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Customer ID</th>
//             <th>Name</th>
//             <th className="expand">Current Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows.map((row, idx) => {
//             const statusText =
//               row.status.charAt(0).toUpperCase() + row.status.slice(1);

//             return (
//               <tr key={idx}>
//                 <td>{row.customerId}</td>
//                 <td>{row.name}</td>
//                 <td className="expand">{row.description}</td>
//                 <td className="fit">
//                   <span className="actions">
//                     <BsFillTrashFill
//                       className="delete-btn"
//                       onClick={() => deleteRow(idx)}
//                     />
//                     <BsFillPencilFill
//                       className="edit-btn"
//                       onClick={() => editRow(idx)}
//                     />
//                   </span>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Customers;



import React from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./Customers.css";

export const Customers = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="table-wrapper">
      <h1>Customer Details</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Name</th>
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
                <td>{row.Customerid}</td>
                <td>{row.cname}</td>
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
    </div>
  );
};

export default Customers;
