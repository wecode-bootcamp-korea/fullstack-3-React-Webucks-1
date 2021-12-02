import React, { useState } from 'react';

function CoffeeCard(props) {
  const [heart, setHeart] = useState(false);
  return (
    <li>
      <div className="coffee-list__box">
        <img src={props.src} alt="커피" width="200px" height="200px" />
      </div>
      <p>
        {props.content}
        <i
          className={heart === true ? 'fas fa-heart' : 'far fa-heart'}
          onClick={() => setHeart(!heart)}
        ></i>
      </p>
    </li>
  );
}

export default CoffeeCard;
