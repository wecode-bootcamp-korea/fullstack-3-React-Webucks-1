import React from 'react';

function Comment({
  comments,
  setComments,
  commentIndex,
  author,
  content,
  heart,
}) {
  const arr = comments;

  return (
    <div className="comment">
      <div className="nutrition-info__review-comment__inner">
        <p>
          <span>{author}</span>
          {content}
        </p>
        <i
          className={heart === true ? 'fas fa-heart' : 'far fa-heart'}
          onClick={() => {
            arr[commentIndex].heart = !arr[commentIndex].heart;
            setComments([...arr]);
          }}
        ></i>
        <i
          className="fas fa-times"
          onClick={(e) => {
            comments.splice(commentIndex, 1);
            setComments([...comments]);
          }}
        ></i>
      </div>
    </div>
  );
}

export default Comment;
