import React, { useState, useEffect } from 'react';
import './Detail.scss';
import Nav from '../../../components/Nav/Nav';
import Comment from '../Comment/Comment';

function Detail() {
  const [heartClick, setHeartClick] = useState(false);

  // const [commentsMock, setCommentsMock] = useState([]);

  const [comments, setComments] = useState([]);

  const commentOnChange = (e) => {
    if (e.key === 'Enter') {
      comments.push({
        content: e.target.value,
        author: 'dev.Taeyeong',
        heart: false,
      });
      setComments([...comments]);
      e.target.value = '';
    }
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/taeYeong/commentData.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
      });
  }, []);

  return (
    <div className="detail">
      <Nav />
      <section id="detail">
        <div className="container">
          <h1 className="detail-title">콜드브루</h1>
          <div className="detail__route">
            홈 {'>'} MENU {'>'} 음료 {'>'} 에스프레소 {'>'} 화이트 초콜릿 모카
          </div>
          <div className="detail-page">
            <div className="detail-page__img">
              <img
                src="/images/taeYeong/coffee2.jpg"
                alt="커피 사진"
                width="400px"
              />
            </div>
            <div className="detail-page__content">
              <div className="detail-page__content-title">
                <h2>화이트 초콜릿 모카</h2>
                <small>White Chocolate Moca</small>
                <i
                  className={heartClick ? 'fas fa-heart' : 'far fa-heart'}
                  id="detail-page__content-heart"
                  onClick={() => setHeartClick(!heartClick)}
                ></i>
              </div>
              <div className="detail-page__content-desc">
                달콤하고 부드러운 화이트 초콜릿 시럽과 에스프레소를 스팀 밀크와
                섞어 휘핑크림으로 마무리한 음료로 달콤함과 강렬한 에스프레소가
                부드럽게 어우러진 커피
              </div>
              <div className="nutrition-info">
                <h1>제품 영양 정보</h1>
                <div className="nutrition-info__list">
                  <div className="nutrition-info__list-1">
                    <ul>
                      <li>
                        <div>1회 제공량 (kcal)</div>
                        <div>345</div>
                      </li>
                      <li>
                        <div>포화지방 (g)</div>
                        <div>11</div>
                      </li>
                      <li>
                        <div>단백질 (g)</div>
                        <div>11</div>
                      </li>
                    </ul>
                  </div>
                  <div className="nutrition-info__list-2">
                    <ul>
                      <li>
                        <div>나트륨 (g)</div>
                        <div>150</div>
                      </li>
                      <li>
                        <div>당류 (g)</div>
                        <div>35</div>
                      </li>
                      <li>
                        <div>카페인 (mg)</div>
                        <div>75</div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="nutrition-info__allergy">
                  알레르기 유발 요인 : 우유
                </div>
                <div className="nutrition-info__review">
                  <h3>리뷰</h3>
                  <div className="nutrition-info__review-comment">
                    {/* {commentsMock.map((commentMock, index) => {
                      return (
                        <Comment
                          content={commentMock.comment}
                          author={commentMock.author}
                          key={index}
                        />
                      );
                    })} */}

                    {comments.map((comment, index) => {
                      return (
                        <Comment
                          comments={comments}
                          setComments={setComments}
                          commentIndex={index}
                          author={comment.author}
                          content={comment.content}
                          heart={comment.heart}
                          key={index}
                        />
                      );
                    })}
                  </div>
                  <input
                    type="text"
                    id="input-review"
                    placeholder="리뷰를 입력해주세요."
                    onKeyPress={commentOnChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer">
        <div className="container">
          <div className="footer__company">
            <div className="footer-title">COMPANY</div>
            <div className="footer-list">
              <ul>
                <li>한눈에 보기</li>
                <li>스타벅스 사명</li>
                <li>스타벅스 소개</li>
                <li>국내 뉴스룸</li>
                <li>세계의 스타벅스</li>
                <li>글로벌 뉴스룸</li>
              </ul>
            </div>
          </div>
          <div className="footer__corpoarte">
            <div className="footer-title">CORPORATE SALES</div>
            <div className="footer-list">
              <ul>
                <li>단체 및 기업 구매 안내</li>
              </ul>
            </div>
          </div>
          <div className="footer__partnership">
            <div className="footer-title">PARTNERSHIP</div>
            <div className="footer-list">
              <ul>
                <li>신규 입점 제의</li>
                <li>협력 고객사 등록 신청</li>
              </ul>
            </div>
          </div>
          <div className="footer__community">
            <div className="footer-title">ONLINE COMMUNITY</div>
            <div className="footer-list">
              <ul>
                <li>페이스북</li>
                <li>트위터</li>
                <li>유튜브</li>
                <li>블로그</li>
                <li>인스타그램</li>
              </ul>
            </div>
          </div>
          <div className="footer__recurit">
            <div className="footer-title">RECRUIT</div>
            <div className="footer-list">
              <ul>
                <li>채용 소개</li>
                <li>채용 지원하기</li>
              </ul>
            </div>
          </div>
          <div className="footer__webucks">
            <div className="footer-title">WEBUCKS</div>
            <div className="footer-list"></div>
          </div>
        </div>
      </footer>
      <script src="./js/detail.js"></script>
    </div>
  );
}

export default Detail;
