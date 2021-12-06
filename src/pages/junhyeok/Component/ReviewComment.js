//댓글기능
function ReviewComment(props) {
  return (
    <div className="commentBox">
      {/* text배열에서 글받기 */}
      <span className="commentText" onClick={() => spanEvent(props)}>
        <b>{sessionStorage.getItem('id')}</b> : {props.text}
      </span>
      {/* 삭제버튼 */}
      <button className="deleteBtn" onClick={() => deleteEvent(props)}>
        삭제
      </button>
    </div>
  );
}

// 하트이벤트
function spanEvent(props) {
  let copy = JSON.parse(JSON.stringify(props.inputText)); //deepCopy
  copy[props.index][1] === '🤍'
    ? (copy[props.index][1] = '❤️')
    : (copy[props.index][1] = '🤍');
  props.setinputText(copy);
}
// 삭제이벤트
function deleteEvent(props) {
  let deepcopy = JSON.parse(JSON.stringify(props.inputText)); //deepCopy
  deepcopy.splice(props.index, 1); // text 배열요소 삭제
  props.setinputText(deepcopy);
}

export default ReviewComment;
