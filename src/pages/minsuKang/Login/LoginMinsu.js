import React, {useState} from "react";
import "./Login.scss";
import {useNavigate} from "react-router-dom";




function Login(){
    const navigate = useNavigate();
    const [userId, setUserId] = useState("")
    const [userPw, setUserPw] = useState("") //이처럼 usestate를 통해 state를 정해줘야만 값이 저장된다. 
    const [active, setActive] = useState(false)
    const handleIdInput = (e)=>{
        setUserId(e.target.value);// 여기서 잘 못 생각한 부분: userid라는 것이 결국에는 검출되는 것이므로. 함수과정을 거치면서 변화된다는 생각을 못함.
    };
    const handlePwInput = (e)=>{
        setUserPw(e.target.value);   
    }
    // const goToList = () => {if (userId.includes('@') && userPw.length>5){
    // navigate("/list-minsu")}
    // else {alert("회원이 아니군요!");}}// 구현은 되나, 현재 로그인 화면으로 리로드가 안 되고 있음. 다른 추가적인 장치가 필요해 보인다. 
    //                             //다시 구현 실패... 
    const goToList = () => {
        if (userId.includes('@') && userPw.length >5) {
          sessionStorage.setItem("id",userId);
          navigate('/list-minsu');
        } else {
          alert('가입된 회원이 아닙니다. 회원가입을 먼저 해주세요.');
        }
      };

    const activeLogin = ()=> { return userId.includes('@') && userPw.length>5 ? setActive(true) : setActive(false);}
    return(
    <div className="Login_container">
        <div className="Login_wrapper">
                <p className="Login_logo">WeBucks</p>
                <form  action="submit" className="Login_button1">
                    <input  id= "id" className="Login_id" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" onKeyUp= {activeLogin} onChange={handleIdInput} />
                    <input  id ="pw" className="Login_pw" type="password" placeholder="비밀번호"onKeyUp= {activeLogin} onChange={handlePwInput}/>
                    <button id="Login_bt" type="button" 
                    onClick={goToList}
                    className={active ? 'activeLoginBtn'  : 'loginBtn' }
                    disabled={(userId === '' || userPw === '') || (! userId.includes('@')|| userPw.length< 6) ? true : false}>
                    로그인</button>
                </form> 
                <div className="Login_key1">
                    <a href="https://www.starbucks.co.kr" id="Login_s">비밀번호를 잊으셨나요?</a>
                </div>
            
        </div>
    </div>        
    );
}

export default Login;