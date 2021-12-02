import React, { useState } from 'react';

function Comment(props) {
  const [heart, setHeart] = useState(false);

  return (
    <div className="nutrition-info__review-comment__inner">
      <p>
        <span>{props.author ? props.author : 'dev.Taeyeong'}</span>
        {props.commentInput}
      </p>
      <i
        className={heart === true ? 'fas fa-heart' : 'far fa-heart'}
        onClick={() => setHeart(!heart)}
      ></i>
      <i
        className="fas fa-times"
        onClick={(e) => {
          e.target.parentElement.remove();
        }}
      ></i>
    </div>
  );
}

export default Comment;
