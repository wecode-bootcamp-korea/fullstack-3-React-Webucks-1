import React, {useState} from "react";

function CoffeeCard(props) {
  
  return(
      <div className="image">
        <div className="image_container">
          <img src={props.src}alt="커피"/>
        </div>     
        <h3>{props.content}</h3>
      </div>
  )}
export  default CoffeeCard;











