import { useContext, useState } from "react";
import "./Main.css";
import { ThemeContext } from "../ThemeContext";
import Header from "../Components/HeaderTemplate/Header";
import Content from "../Content/Content";
import { Route, Routes } from "react-router";
import ChatEditor from "../Components/ChatEditorTemplate/ChatEditor";
// import ChatEditor from "../Components/ChatEditorTemplate/ChatEditor";

const Main = () => {
  const { DarkTheme } = useContext(ThemeContext);
  const [ShowChatEditor, setShowChatEditor] = useState(false);

  return (
    <div className={`main ${DarkTheme && "dark"}`}>
      <>
        <Header />
        <Content />
      </>
    </div>
  );
};

export default Main;
