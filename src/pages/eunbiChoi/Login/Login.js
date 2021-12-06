import { useState } from "react";
import { Link } from "react-router-dom";
import "../../../styles/reset.scss"
import "./Login.scss";


const Login = () => {
  const [userid, setId] = useState();
  const [userpw, setPw] = useState();
  
  function handleIdInput(e){
    setId(e.target.value)
  }
  
 function handlePwInput(e){
   setPw(e.target.value)
 }

  return (
    <div className="login-wrapper">
      <h1>BeerBucks</h1>
      <form className="login-form">
        <div className="input-control">
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
        <div className="input-control password-input-control">
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
          tabindex="0"
          formaction="list.html"
          id="login-button"
          type="submit"
          disabled="true"
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
