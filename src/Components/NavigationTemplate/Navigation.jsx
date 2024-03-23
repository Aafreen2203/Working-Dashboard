import Nav from "./NavIconTemplate/Nav";
import "./Navigation.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { useHistory } from "react-router";
import ChatEditor from "../ChatEditorTemplate/ChatEditor";

import { FiChevronLeft, FiMessageSquare } from "react-icons/fi";
import { TbDashboard, TbFileUpload } from "react-icons/tb";
import { VscGraphLine } from "react-icons/vsc";
import {
  AiOutlineUsergroupAdd,
  AiOutlineDollarCircle,
  AiOutlineUserSwitch,
} from "react-icons/ai";
import { MdOutlineNotificationsActive, MdSwapHoriz } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";
import { BiMessageAltAdd, BiDotsHorizontalRounded } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../ThemeContext";
import Employees from "../EmployeesTemplate/Employees";
import Customers from "../CustomersTemplate/Customers";
import Orders from "../OrdersTemplate/Orders";

const Navigation = () => {
  const [nav, setnav] = useState(false);
  const [username, setusername] = useState("");
  // const [showChatEditor, setShowChatEditor] = useState(false);

  const { DarkTheme, setDarkTheme } = useContext(ThemeContext);
  // const history = useHistory();

  // function Chateditor() {
  //   // history.push("/chateditor");
  //   setShowChatEditor(true);
  // }

  function changeTheme() {
    setDarkTheme(!DarkTheme);
  }

  useEffect(() => {
    setusername(localStorage.getItem("username"));
  }, []);

  return (
    <div className={`navigation ${nav && "active"} ${DarkTheme && "dark"}`}>
      <div
        className={`menu ${nav && "active"}`}
        onClick={() => {
          setnav((prevState) => !prevState);
        }}
      >
        <FiChevronLeft className="menu-icon" />
      </div>
      <header>
        <div className="profile">
          <img
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="user-img"
            className="profile-img"
          />
        </div>
        <span>{username}</span>
      </header>

      <Nav Icon={TbDashboard} title={"Dashboard"} />

      <Link to={"/chateditor"} className="nav-item">
        <FiMessageSquare className="nav-icon" />
        <span onClick={() => ChatEditor()} className="edit">
          Editor
        </span>
      </Link>

      <Link to={"/employees"} className="nav-item">
        <AiOutlineUsergroupAdd className="nav-icon" />
        <span onClick={() => Employees()} className="edit">
          Employees
        </span>
      </Link>

      {/* <Nav Icon={AiOutlineUsergroupAdd} title={"Employees"} /> */}

      <div className="divider"></div>

      <Link to={"/customers"} className="nav-item">
        <MdOutlineNotificationsActive className="nav-icon" />
        <span onClick={() => Customers()} className="edit">
          Customers
        </span>
      </Link>

      {/* <Nav Icon={MdOutlineNotificationsActive} title={"Customers"} /> */}
      <Nav Icon={RiAccountCircleLine} title={"Attendance Leave"} />
      <Nav Icon={AiOutlineDollarCircle} title={"Payroll"} />

      {/* <Nav Icon={TbFileUpload} title={"Orders"} /> */}

      <Link to={"/orders"} className="nav-item">
        <TbFileUpload className="nav-icon" />
        <span onClick={() => Orders()} className="edit">
          Orders
        </span>
      </Link>

      <Nav Icon={BiMessageAltAdd} title={"CRM"} />
      <Nav Icon={AiOutlineUserSwitch} title={"Change Account"} />

      <div className="divider"></div>

      <Nav
        Icon={MdSwapHoriz}
        title={`${
          DarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"
        }`}
        onClick={changeTheme}
      />
      <Nav Icon={BiDotsHorizontalRounded} title={"More Details"} />

      <svg
        className="bg-waves"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
        style={{ fill: "#ffffff", width: "193%", height: 500 }}
      >
        <path
          d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
          opacity=".25"
        />
        <path
          d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
          opacity=".5"
        />
        <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
      </svg>

      {/* {showChatEditor} */}
    </div>
  );
};

export default Navigation;
