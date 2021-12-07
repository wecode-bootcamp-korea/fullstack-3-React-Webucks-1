import React, { useState } from 'react';

function CoffeeCard({ src, content }) {
  const [heart, setHeart] = useState(false);
  return (
    <li className="coffee-card">
      <div className="coffee-list__box">
        <img src={src} alt="커피" width="200px" height="200px" />
      </div>
      <p>
        {content}
        <i
          className={heart === true ? 'fas fa-heart' : 'far fa-heart'}
          onClick={() => setHeart(!heart)}
        ></i>
      </p>
    </li>
  );
}

export default CoffeeCard;
