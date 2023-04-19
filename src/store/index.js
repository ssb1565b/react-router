import { combineReducers } from "redux";
import todo from "./modules/todo";
import mbti from "./modules/mbti";
import user from "./modules/users";
import weight from "./modules/weight";

export default combineReducers({
  todo,
  weight,
  mbti,
  user,
  // 나중에 useSelector로 꺼내올때 이 이름으로 꺼내올수있음
  // 스토어 관리중
});
