import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../styles/reset.scss";
import "./Login.scss";

const Login = () => {
  const [userid, setUserId] = useState();
  const [userpw, setUserPw] = useState();
  
  function handleIdInput(e){
    setUserId(e.target.value)
  }
  
  function handlePwInput(e){
    setUserPw(e.target.value)
  }

  async function goLogin(e){
    e.preventDefault()
    const response = await fetch('/users/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "email" : userid,
        "password" : userpw,
      }),
    });

    if (response.status === 200) {
      const data = await response.json()
      // localStorage.setItem('token', data.token)
      sessionStorage.setItem('token', data.token)
    }
  }

  const validateLogin = userid && userpw ? (userid.includes('@') && userpw.length > 5) : false

  return (
    <div className="login-wrapper">
      <h1>BeerBucks</h1>
      <form className="login-form">
        <div className={`input-control ${userid && userid.includes('@')? "validated": ""}`}>
          <label className="visually-hidden" for="username"></label>
          <input
            className="form-items"
            type="text"
            name="username"
            id="username"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleIdInput}
          />
        </div>
        <div className= {`input-control password-input-control 
          ${userpw && userpw.length > 5? "validated": ""}`}>
          <label className="visually-hidden" for="password"></label>
          <input
            className="form-items"
            type="password"
            name="password"
            id="password"
            placeholder="비밀번호"
            onChange={handlePwInput}
          />
          <button className="password-button">show</button>
        </div>
        <button
          // tabindex="0"
          // formaction="list.html"
          id="login-button"
          type="submit"
          // disabled="true"
          className={validateLogin ? "login-validated" : ""}
          onClick={goLogin}
        >
        로그인
        </button>
      </form>
      <Link className="lost-pw" to="/detail">
        비밀번호를 잊으셨나요?
      </Link>
    </div>
  );
};

export default Login;
