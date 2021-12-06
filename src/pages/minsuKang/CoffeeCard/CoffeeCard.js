import React, {useState} from "react";
import Detail from "../Detail/DetailMinsu";
import { Link } from "react-router-dom";

function CoffeeCard(props) {
  
  return(
      <div className="image">
        <div className="image_container">
        <Link to='/detail-minsu'><img src={props.src} alt="커피"/></Link>
        </div>     
        <h3>{props.content}</h3>
      </div>
  )}

export  default CoffeeCard;










