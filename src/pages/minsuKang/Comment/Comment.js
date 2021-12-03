import React, {useState} from "react";

function Comment(props) {
  
  return(
    <div>
      <h3>{props.author}</h3> <span>{props.comment}</span>    
    </div>
  )}
export  default Comment;