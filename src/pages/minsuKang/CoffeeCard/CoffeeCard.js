import React from "react";
import { Link } from "react-router-dom";

function CoffeeCard({src, content}) {
  
  return(
      <div className="image">
        <div className="image_container">
          <Link to='/detail-minsu'><img src={src} alt="커피"/></Link>
        </div>     
        <h3>{content}</h3>
      </div>
  )
}

export  default CoffeeCard;










