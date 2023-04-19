import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import OrangeButton from "../components/OrangeButton";
import { init, next } from "../store/modules/mbti";

const Header = styled.p`
  font-size: 3em;
`;
const MainImg = styled.img`
  width: inherit;
`;
const SubHeader = styled.p`
  font-size: 1.5em;
  color: #777;
`;

export default function Start() {
  const [counts, setCounts] = useState(0);
  const dispatch = useDispatch();

  const fetchData = async () => {
    // mbti 받아오는 코드
    const resMbtiData = await fetch("http://localhost:4001/data/getdata");
    if (resMbtiData.status === 200) {
      const mbtiData = await resMbtiData.json();
      if (mbtiData[0]) dispatch(init(mbtiData[0]));
      // json을 객체로 변하는데에는 시간이 필요함
    } else {
      // throw new Error("통신 이상"); 이렇게 써도됨
      console.log(await resMbtiData.json());
    }

    // 방문자수 받아오는 코드
    const resGetCounts = await fetch("http://localhost:4001/data/getcounts");
    if (resGetCounts.status === 200) {
      const countData = await resGetCounts.json();
      console.log(countData.counts);
      setCounts(() => countData.counts);
    } else {
      console.log(await resGetCounts.json());
    }
  };
  useEffect(() => {
    fetchData();
    // useEffect는 함수를 다른곳에서 선언후 호출하는 방식으로 사용 가능 >> 결국 js 파일로 바꿀떄 호출하는 방식으로 해야 변경가능한것으로 예상
  }, []);
  return (
    <>
      <Header>개발자 MBTI 조사</Header>
      <MainImg src="/images/main.jpg" alt="MBTI 메인" />
      <SubHeader>
        개발자가 흔히 접하는 상황에 따라서 MBTI를 알아봅시다! {"\n\n"}
        {counts} 명이 참여해 주셨습니다.
      </SubHeader>
      <OrangeButton clickEvent={() => dispatch(next())}>
        테스트 시작
      </OrangeButton>
    </>
  );
}
