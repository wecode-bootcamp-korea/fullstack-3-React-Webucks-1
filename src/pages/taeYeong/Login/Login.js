import React, { useState } from 'react';
import './Login.scss';

function Login() {
  const [idInput, setIdInput] = useState('');
  const [pwInput, setPwInput] = useState('');

  const handleIdInput = (e) => {
    setIdInput(e.target.value);
  };

  const handlePwInput = (e) => {
    setPwInput(e.target.value);
  };

  const validationId = (id) => {
    if (id.includes('@')) {
      return true;
    }
    return false;
  };

  const validationPw = (pw) => {
    if (pw.length >= 5) {
      return true;
    }
    return false;
  };

  return (
    <div className="login">
      <section id="login">
        <h1 className="login-title">WeBucks</h1>
        <form>
          <div className="login-input">
            <input
              type="text"
              id="user-id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={handleIdInput}
            />
          </div>
          <div className="login-input">
            <input
              type="password"
              id="user-pw"
              placeholder="비밀번호"
              onChange={handlePwInput}
            />
            <button type="button" id="user-pw__btn">
              show
            </button>
          </div>
          <div>
            <button
              type="button"
              className="login-button"
              disabled={
                validationId(idInput) && validationPw(pwInput) ? false : true
              }
            >
              로그인
            </button>
          </div>
        </form>
        <div>
          <a href="#!" className="find-pw">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </section>
    </div>
  );
}

export default Login;
