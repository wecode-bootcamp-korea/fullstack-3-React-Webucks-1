import React, {useState} from "react";
import css from "./Login.module.css";
import {useNavigate} from "react-router-dom";




function Login(){
    const navigate = useNavigate();
    const goToList = () => {navigate("/List");};
    const [userid, setUserId] = useState("")
    const [userpw, setUserPw] = useState("") //이처럼 usestate를 통해 state를 정해줘야만 값이 저장된다. 

    const handleIdInput = (e)=>{
        setUserId(e.target.value);// 여기서 잘 못 생각한 부분: userid라는 것이 결국에는 검출되는 것이므로. 함수과정을 거치면서 변화된다는 생각을 못함.
    };
    const handlePwInput = (e)=>{
        setUserPw(e.target.value);
    }
    return(
        <div className={css.wrapper}>
            <p className={css.logo}>WeBucks</p>
            <form  action="submit" className={css.button1}>
                <input  id= "id" className={css.id} type="text" placeholder="전화번호, 사용자 이름 또는 이메일" onChange={handleIdInput}/>
                <input  id ="pw" className={css.pw} type="password" placeholder="비밀번호" onChange={handlePwInput}/>
                <button id="loginbt" type="submit" className={css.login} onClick={goToList}>로그인</button>
            </form> 
            <div className={css.key1}>
                <a href="https://www.starbucks.co.kr" id={css.s}>비밀번호를 잊으셨나요?</a>
            </div>
            
        </div>   
    );
}

export default Login;