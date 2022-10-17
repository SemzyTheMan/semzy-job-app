import React, { useContext } from "react";
import Header from "../Containers/Header/header";
import DarkModeToggle from "react-dark-mode-toggle";
import { DarkThemeContext } from "../Components/DarkThemeContext";
import classes from "./Layout.module.css";
import Form from "../Containers/Form/form";
import Main from "../Containers/Main/Main";
import { Route, Routes } from "react-router-dom";
import Description from "../Containers/Description/description";
const Layout = (props) => {
  const { turnOn, setTurnOn, mainColor } = useContext(DarkThemeContext);
  const merge = (
    <div>
      {" "}
      <Form></Form>
      <Main></Main>
    </div>
  );

  return (
    <div
      style={{
        backgroundColor: mainColor.bg,
        //color: mainColor.txt,
      }}
    >
      <DarkModeToggle
        className={classes.Toggle}
        onChange={setTurnOn}
        checked={turnOn}
        size={80}
      />
      <Header></Header>
      <Routes>
        <Route path="/" element={merge}></Route>
        <Route
          path="/description"
          element={<Description></Description>}
        ></Route>
      </Routes>
    </div>
  );
};

export default Layout;
