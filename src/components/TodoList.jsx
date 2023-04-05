import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create, done } from "../store/modules/todo";

export default function TodoList() {
  const todoList = useSelector((state) => state.todo.todoList).filter(
    (el) => !el.done
  );

  const todoLength = useSelector((state) => state.todo.todoList).length;
  const dispatch = useDispatch();
  const inputRef = useRef();

  return (
    <section>
      <h1>할일목록</h1>
      <div>
        <input type="text" ref={inputRef} />
        <button
          onClick={() => {
            inputRef.current.value !== "" &&
              dispatch(
                create({ id: todoLength, text: inputRef.current.value })
              );
            inputRef.current.value = "";
          }}
        >
          추가
        </button>
      </div>
      <ul>
        {todoList.map((el) => {
          console.log(todoList);
          return (
            <li key={el.id}>
              {el.text}{" "}
              <button onClick={() => dispatch(done(el.id))}>완료</button>
              {/* done이 바로 실행되지 않는지.. */}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
