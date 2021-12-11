import React, {useState} from 'react';
import {HeartOutlined, HeartFilled} from '@ant-design/icons';
import './style.css'


function LikeButton(){
  const [checked, ischecked]=useState(false)
  console.log(checked);
  const activeLogin = ()=> { checked ? ischecked(false) : ischecked(true);}

  return(
    <div className="icons-list">
      {checked ? <HeartFilled className="button red" onClick={activeLogin}/> :<HeartOutlined className ="button" onClick={activeLogin}/>}
    </div>
  )
}
export default LikeButton;