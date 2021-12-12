import React, { useState } from 'react';
import { Nav, BottomBar } from '../Component/NavAndBottom';
import ReviewComment from '../Component/ReviewComment';
import './Detail.scss';

function Detail() {
  let [inputText, setinputText] = useState([]);
  let [like, setlike] = useState('🤍');
  // 댓글 입력창 누를때

  let pressEnterEvent = (e) => {
    if (e.keyCode === 13 && e.target.value.length > 0) {
      let copy = [...inputText];
      copy.push([e.target.value, '🤍']);
      setinputText(copy);
      e.target.value = '';
    }
  };

  return (
    <div className="detail">
      <Nav />
      <div className="container">
        <h2>콜드 브루</h2>
        {/* 이미지 */}
        <div className="detail-img">
          <img src="./images/junhyeok/coffee11.png" alt="화이트 초콜릿 모카" />
        </div>
        {/* 상세 데이터 */}
        <div className="detail-info">
          <h3 className="title">화이트 초콜릿 모카</h3>
          <span
            className="like"
            onClick={() => {
              like === '🤍' ? setlike('❤️') : setlike('🤍');
            }}
          >
            {like}
          </span>
          <p className="smallP">White chocolate Mocha</p>
          <p className="info">
            달콤하고 부드러운 화이트 초콜릿 시럽과 에스프레소를 스팀 밀크와 섞어
            휘핑크림으로 마무리한 음료로 달콤함과 강렬한 에스프레소가 부드럽게
            어우러진 커피
          </p>
          <div className="item">
            <p className="item-info">제품 영양 정보</p>
            <span className="item-span">Tall(톨) / 355ml (12 fl oz)</span>
          </div>
          <div className="detail-kcal">
            <Division />
            <Division />
          </div>
          <div className="알러지">알레르기 유발 요인 : 우유</div>
          <div className="review">
            <h2>리뷰</h2>
            {/* 댓글배열 map돌리기 */}
            <div className="comment">
              {inputText.map((e, i) => {
                return (
                  <ReviewComment
                    key={i}
                    text={e}
                    index={i}
                    inputText={inputText}
                    setinputText={setinputText}
                  />
                );
              })}
            </div>
            {/* input에 이벤트 */}
            <input
              maxLength="30"
              placeholder="리뷰를 입력해주세요."
              id="commentInput"
              type="text"
              onKeyDown={pressEnterEvent}
            />
          </div>
        </div>
      </div>
      <BottomBar />
    </div>
  );
}

//kcal
function Division() {
  return (
    <div className="division">
      <div className="kcal">
        <p>1회 제공량 (kcal)</p>
        <p>345</p>
      </div>
      <div className="kcal">
        <p>1회 제공량 (kcal)</p>
        <p>345</p>
      </div>
      <div className="kcal">
        <p>1회 제공량 (kcal)</p>
        <p>345</p>
      </div>
    </div>
  );
}

export default Detail;
