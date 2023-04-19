import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";

function App() {
  const isLogin = useSelector((state) => state.user.isLogin);
  return (
    <>
      <Routes>
        <Route path="/" element={isLogin ? <Main /> : <Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
