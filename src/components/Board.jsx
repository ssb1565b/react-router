import React from "react";
import { Link } from "react-router-dom";

export default function Board() {
  return (
    <>
      <h1>게시판 페이지 입니다</h1>
      <h1>게시판 페이지 입니다</h1>
      <Link to="1">
        <h2>게시글 1번 보여주기</h2>
      </Link>
      <Link to="2">
        <h2>게시글 2번 보여주기</h2>
      </Link>
      {/* /1 은 /board가 지워지고 localhost:4000 뒤에 바로 /1 이 붙게된느것
        /를 붙이고 싶다면 /board/1 이렇게 써주면 됨 */}
      <h2>게시글 1번 보여주기</h2>
    </>
  );
}
