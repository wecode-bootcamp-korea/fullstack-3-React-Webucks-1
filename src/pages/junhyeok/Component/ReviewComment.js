//댓글기능
function ReviewComment({ text, index, inputText, setinputText }) {
  return (
    <div className="commentBox">
      {/* text배열에서 글받기 */}
      <span
        className="commentText"
        onClick={() => spanEvent(index, setinputText, inputText)}
      >
        <b>{sessionStorage.getItem('id')}</b> : {text}
      </span>
      {/* 삭제버튼 */}
      <button
        className="deleteBtn"
        onClick={() => deleteEvent(index, setinputText, inputText)}
      >
        삭제
      </button>
    </div>
  );
}

// 하트이벤트
function spanEvent(index, setinputText, inputText) {
  let copy = JSON.parse(JSON.stringify(inputText)); //deepCopy
  copy[index][1] === '🤍' ? (copy[index][1] = '❤️') : (copy[index][1] = '🤍');
  setinputText(copy);
}
// 삭제이벤트
function deleteEvent(index, setinputText, inputText) {
  let deepcopy = JSON.parse(JSON.stringify(inputText)); //deepCopy
  deepcopy.splice(index, 1); // text 배열요소 삭제
  setinputText(deepcopy);
}

export default ReviewComment;
