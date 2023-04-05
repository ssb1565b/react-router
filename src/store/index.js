import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, createStore } from "redux";
import todo from "./modules/todo";
import weightReducer from "./modules/weight";

export default combineReducers({
  todo,
  weightReducer,
  // 나중에 useSelector로 꺼내올때 이 이름으로 꺼내올수있음
});
