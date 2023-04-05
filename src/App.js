import "./App.css";
import React from "react";
import Profile from "./components/Profile";
import Board from "./components/Board";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import BoardDetail from "./components/BoardDetail";
import TestRedux from "./components/TestRedux";
import { useDispatch, useSelector } from "react-redux";
import ListContainer from "./components/ListContainer";
function App() {
  return (
    <div className="App">
      <ListContainer />
      {/* <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/test" element={<TestRedux />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:boardID" element={<BoardDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </div>
  );
}

export default App;
