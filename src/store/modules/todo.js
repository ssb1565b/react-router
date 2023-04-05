const initState = {
  todoList: [
    {
      id: 0,
      text: "리액트 공부하기",
      done: false,
    },
    {
      id: 1,
      text: "척추의 요정이 말합니다! 척추 펴기!",
      done: false,
    },
    {
      id: 2,
      text: "취업 하기",
      done: false,
    },
  ],
  buyList: ["닌텐도", "자동차"],
  todoListCount: 3,
};
const CREATE = "todo/CREATE";
const DONE = "todo/DONE";

// let counts = initState.todoList.length;
// initState.nextID = counts;
// initState["nextID"]
export function create(payload) {
  return {
    type: CREATE,
    payload,
    //payload : payload  를 단축한것이 payload임
  };
}

export function done(id) {
  return {
    type: DONE,
    id,
  };
}
export default function todo(state = initState, action) {
  switch (action.type) {
    case CREATE:
      return {
        // state === initState
        ...state,
        //  방법 1 : 전개연산자 사용하여 기존값 전개 후 새로운 값 추가
        todoList: [
          ...state.todoList, // 그대로 카피해서 전개해줌
          { id: action.payload.id, text: action.payload.text, done: false },
        ],

        // // 방법 2 : concat으로 기존배열에 값 추가하여 반환
        // todoList: state.todoList.concat({
        //   id: action.payload.id,
        //   text: action.payload.text,
        //   done: false,
        // }),

        // 잘못된 시도: 이렇게 하면 기존 배열값이 날라가고 새로운 값만 추가됨
        // todoList: [
        //   {
        //     [action.payload.id]: {
        //       id: action.payload.id,
        //       text: action.payload.text,
        //       done: false,
        //     },
        //   },
        // ],
      };
    case DONE:
      return {
        ...state,
        todoList: state.todoList.map((el) => {
          if (el.id === action.id) {
            return {
              ...el,
              done: true,
            };
          } else {
            return el;
          }
        }),
      };
    default:
      return state;
  }
}
