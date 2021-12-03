import React, { useState } from 'react';

function Comment(props) {
  // const [heart, setHeart] = useState(false);
  const arr = props.comments;

  return (
    <div className="nutrition-info__review-comment__inner">
      <p>
        <span>{props.author ? props.author : 'dev.Taeyeong'}</span>
        {props.content}
      </p>
      <i
        className={props.heart === true ? 'fas fa-heart' : 'far fa-heart'}
        onClick={() => {
          console.log(arr[props.commentIndex]);
          arr[props.commentIndex].heart = !arr[props.commentIndex].heart;
          props.setComments([...arr]);
        }}
        key={props.index}
      ></i>
      <i
        className="fas fa-times"
        onClick={(e) => {
          props.comments.splice(props.commentIndex, 1);
          props.setComments([...props.comments]);
        }}
      ></i>
    </div>
  );
}

export default Comment;
