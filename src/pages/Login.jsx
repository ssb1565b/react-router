import axios from "axios";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../store/modules/users";

export default function Login() {
  const registerIdInput = useRef();
  const registerPwInput = useRef();
  const dispatch = useDispatch();

  // axios 사용
  const registerUser = async () => {
    const res = await axios.post("http://localhost:4001/user/register", {
      id: registerIdInput.current.value,
      password: registerPwInput.current.value,
    });

    console.log(res, res.data);

    if (res.status !== 200) return alert(res.data);

    alert(await res.data);
    dispatch(
      login({
        id: registerIdInput.current.value,
        password: registerPwInput.current.value,
      })
    );
  };
  //  // axios 사용 안함
  // const registerUser = async () => {
  //   if (!registerIdInput.current.value || !registerPwInput.current.value) {
  //     return alert("필수값을 입력해주세요");
  //   }
  //   const res = await fetch("http://localhost:4001/user/register", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       id: registerIdInput.current.value,
  //       password: registerPwInput.current.value,
  //     }),
  //   });
  //   if (res.status !== 200) return alert(await res.json());
  //   alert(await res.json());
  //   dispatch(
  //     login({
  //       id: registerIdInput.current.value,
  //       password: registerPwInput.current.value,
  //     })
  //   );
  // };

  return (
    <>
      <h1>로그인 파트입니다.</h1>
      아이디 :<input type="text" />
      <br />
      <br />
      비밀번호 : <input type="password" />
      <br />
      <br />
      <button>로그인</button>
      <Link to="">카카오 로그인</Link>
      <br />
      <br />
      <h1>회원가입 파트입니다.</h1>
      아이디 :<input ref={registerIdInput} type="text" />
      <br />
      <br />
      비밀번호 : <input ref={registerPwInput} type="password" />
      <br />
      <br />
      <button onClick={registerUser}>회원가입</button>
      <br />
      <br />
    </>
  );
}
