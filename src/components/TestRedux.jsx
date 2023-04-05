import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function TestRedux() {
  const weight = useSelector((state) => state.weightReducer);
  const dispatch = useDispatch();
  return (
    <>
      <h1>당신의 몸무게 : {weight}입니다!</h1>
      <button onClick={() => dispatch({ type: "살찌기" })}>살찌기</button>
      <button onClick={() => dispatch({ type: "빠지기" })}>빠지기</button>
      {/* 오늘만큼 살이찌게 4만큼 살찌게
     이번달 만큼 살이 빠지게  */}
    </>
  );
}
