import { createStore } from "redux";

const weightState = 100;
export default function weightReducer(state = weightState, action) {
  const date = new Date().getDate();
  const month = new Date().getMonth() + 1;
  if (action.type === "살찌기") {
    return (state += date);
  } else if (action.type === "빠지기") {
    return (state -= month);
  } else {
    return state;
  }
}
const store = createStore(weightReducer);
