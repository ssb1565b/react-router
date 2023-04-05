import { combineReducers, createStore } from "redux";
import todo from "./modules/todo";
import mbti from "./modules/mbti";
import weight from "./modules/weight";

export default combineReducers({
  todo,
  weight,
  mbti,
  // 나중에 useSelector로 꺼내올때 이 이름으로 꺼내올수있음
  // 스토어 관리중
});
