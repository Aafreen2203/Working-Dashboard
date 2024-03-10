import { useContext } from "react";
import "./Header.css";
import { ThemeContext } from "../../ThemeContext";

import { BiSearch } from "react-icons/bi";
import { TbMessages } from "react-icons/tb";
import { RiSettingsLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { IoAnalytics } from "react-icons/io5";
import { HiOutlineMoon, HiOutlineLogout } from "react-icons/hi";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase";

const Header = () => {
  const { DarkTheme, setDarkTheme } = useContext(ThemeContext);

  function changeTheme() {
    setDarkTheme(!DarkTheme);
  }

  const logout = () => {
    signOut(auth);
  };

  return (
    <header className={`${DarkTheme && "dark"}`}>
      <div className="search-bar">
        <input type="text" placeholder="search..." />
        <BiSearch className="icon" />
      </div>
      <div className="tools">
        <AiOutlineUser className="icon" />
        <TbMessages className="icon" />
        <IoAnalytics className="icon" />
        <div className="divider"></div>
        <HiOutlineMoon className="icon" onClick={changeTheme} />
        <RiSettingsLine className="icon" />
        <HiOutlineLogout className="icon" onClick={logout} />

        <div className="divider"></div>

        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="profile-img"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
