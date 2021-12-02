import React from "react";
import css from "./Login.module.css";
import {useNavigate} from "react-router-dom";




function Login(){
    const navigate = useNavigate();
    const goToList = () => {navigate("/List");};
    return(
        <div className={css.wrapper}>
            <p className={css.logo}>WeBucks</p>
            <form  action="submit" className={css.button1}>
                <input  id= "id" className={css.id} type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
                <input  id ="pw" className={css.pw} type="password" placeholder="비밀번호" />
                <button id="loginbt" type="submit" className={css.login} onClick={goToList}>로그인</button>
            </form> 
            <div className={css.key1}>
                <a href="https://www.starbucks.co.kr" id={css.s}>비밀번호를 잊으셨나요?</a>
            </div>
            
        </div>   
    );
}

export default Login;