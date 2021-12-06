import React, {useState} from "react";
import "./Comment.scss";

function Comment(props) {
  
  return(
    <div className="reply_box">
      <h3>{props.author ? props.author : (sessionStorage.getItem("id"))}</h3> <span>{props.comment}</span>    
    </div>
  )}
export  default Comment;