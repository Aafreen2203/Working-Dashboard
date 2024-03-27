import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/NavigationTemplate/Navigation";
import { ThemeContext } from "./ThemeContext";
import Main from "./Main/Main";
import Login from "./Login/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";
import ChatEditor from "./Components/ChatEditorTemplate/ChatEditor";
import Employees from "./Components/EmployeesTemplate/Employees";
import Customers from "./Components/CustomersTemplate/Customers";
import { Modal } from "./Components/EmployeesTemplate/Modal";
import { Cmodal } from "./Components/CustomersTemplate/Cmodal";
import Orders from "./Components/OrdersTemplate/Orders";
import { Omodal } from "./Components/OrdersTemplate/Omodal";
import Attendance from "./Components/AttendanceTemplate/Attendance";
import ChatRoom from "./Components/ChatRoomTemplate/ChatRoom";

function App() {
  const [DarkTheme, setDarkTheme] = useState(true);
  const [LoggedIn, setLoggedIn] = useState(false);
  const [showChatEditor, setShowChatEditor] = useState(false);
  const [employeeRows, setEmployeeRows] = useState([
    {
      Employeeid: "Home",
      name: "Sneha",
      description: "This is the main page of the website",
      status: "live",
      salary: 12000,
    },
    {
      Employeeid: "About Us",
      name: "Prachiti",
      description: "This page has details about the company",
      status: "draft",
      salary: 12000,
    },
    {
      Employeeid: "Pricing",
      name: "Aafreen",
      description: "Prices for different subscriptions",
      status: "error",
      salary: 12000,
    },
  ]);
  const [customerRows, setCustomerRows] = useState([
    // Add customer data here
    {
      Customerid: "Home",
      cname: "Sneha",
      description: "This is the main page of the website",
      status: "live",
    },
    {
      Customerid: "About Us",
      cname: "Prachiti",
      description: "This page has details about the company",
      status: "draft",
    },
    {
      Customerid: "Pricing",
      cname: "Aafreen",
      description: "Prices for different subscriptions",
      status: "error",
    },
  ]);
  const [orderRows, setOrderRows] = useState([
    // Add order data here
    {
      Orderid: "Home",
      oname: "Sneha",
      description: "This is the main page of the website",
      status: "live",
      quantity: 10,
      price: 500,
    },
    {
      Orderid: "About Us",
      oname: "Prachiti",
      description: "This page has details about the company",
      status: "draft",
      quantity: 10,
      price: 500,
    },
    {
      Orderid: "Pricing",
      oname: "Aafreen",
      description: "Prices for different subscriptions",
      status: "error",
      quantity: 10,
      price: 500,
    },
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, []);

  const handleDeleteEmployeeRow = (targetIndex) => {
    setEmployeeRows(employeeRows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditEmployeeRow = (idx) => {
    setRowToEdit(idx);
    setModalOpen(true);
  };

  const handleDeleteCustomerRow = (targetIndex) => {
    setCustomerRows(customerRows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditCustomerRow = (idx) => {
    setRowToEdit(idx);
    setModalOpen(true);
  };

  const handleDeleteOrderRow = (targetIndex) => {
    setOrderRows(orderRows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditOrderRow = (idx) => {
    setRowToEdit(idx);
    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setEmployeeRows([...employeeRows, newRow])
      : setEmployeeRows(
          employeeRows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;
            return newRow;
          })
        );
  };

  const handleCustomerSubmit = (newRow) => {
    rowToEdit === null
      ? setCustomerRows([...customerRows, newRow])
      : setCustomerRows(
          customerRows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;
            return newRow;
          })
        );
  };

  const handleOrderSubmit = (newRow) => {
    rowToEdit === null
      ? setOrderRows([...orderRows, newRow])
      : setOrderRows(
          orderRows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;
            return newRow;
          })
        );
  };

  return (
    <Router>
      <ThemeContext.Provider value={{ DarkTheme, setDarkTheme }}>
        <div className="App">
          {LoggedIn ? (
            <>
              <Navigation />
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/chateditor" element={<ChatEditor />} />
                <Route path="/attendance" element={<Attendance />} />
                <Route path="/chatroom" element={<ChatRoom />} />
                <Route
                  path="/employees"
                  element={
                    <Employees
                      rows={employeeRows}
                      deleteRow={handleDeleteEmployeeRow}
                      editRow={handleEditEmployeeRow}
                    />
                  }
                />
                <Route
                  path="/customers"
                  element={
                    <Customers
                      rows={customerRows}
                      deleteRow={handleDeleteCustomerRow}
                      editRow={handleEditCustomerRow}
                    />
                  }
                />
                <Route
                  path="/orders"
                  element={
                    <Orders
                      rows={orderRows}
                      deleteRow={handleDeleteOrderRow}
                      editRow={handleEditOrderRow}
                    />
                  }
                />
              </Routes>
              <div className="btn-container">
                {location.pathname === "/employees" && (
                  <button onClick={() => setModalOpen(true)} className="btn">
                    Add Employee
                  </button>
                )}
                {location.pathname === "/customers" && (
                  <button onClick={() => setModalOpen(true)} className="btn">
                    Add Customer
                  </button>
                )}
                {location.pathname === "/orders" && (
                  <button onClick={() => setModalOpen(true)} className="btn">
                    Add Order
                  </button>
                )}
              </div>
              {modalOpen && location.pathname === "/employees" && (
                <Modal
                  closeModal={() => {
                    setModalOpen(false);
                    setRowToEdit(null);
                  }}
                  onSubmit={handleSubmit}
                  defaultValue={rowToEdit !== null && employeeRows[rowToEdit]}
                />
              )}
              {modalOpen && location.pathname === "/customers" && (
                <Cmodal
                  closeModal={() => {
                    setModalOpen(false);
                    setRowToEdit(null);
                  }}
                  onSubmit={handleCustomerSubmit}
                  defaultValue={rowToEdit !== null && customerRows[rowToEdit]}
                />
              )}
              {modalOpen && location.pathname === "/orders" && (
                <Omodal
                  closeModal={() => {
                    setModalOpen(false);
                    setRowToEdit(null);
                  }}
                  onSubmit={handleOrderSubmit}
                  defaultValue={rowToEdit !== null && orderRows[rowToEdit]}
                />
              )}
            </>
          ) : (
            <Login />
          )}
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
