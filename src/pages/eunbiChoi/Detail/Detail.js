import React, { useState } from "react";
import Nav from "../../../components/Nav/Nav"
import "../../../styles/reset.scss"
import "./Detail.scss";

const Detail = () => {
  const [isFavorite, setFavorite] = useState(false);

  const toggleHeart = () => {
    setFavorite(!isFavorite)
  }

  return (
    <section className="detail-container">
      <Nav />
      <section className="inner-wrapper beer-category-wrapper">
        <h2>드래프트 맥주</h2>
        <nav>
          <ul className="breadcrumb-path">
            <li>
              <a href="{#}" className="breadcrumb-links">
                홈
              </a>
            </li>
            <li>
              <a href="{#}" className="breadcrumb-links">
                MENU
              </a>
            </li>
            <li>
              <a href="{#}" className="breadcrumb-links">
                드래프트 맥주
              </a>
            </li>
            <li>
              <a href="{#}" className="breadcrumb-links">
                아이피에이
              </a>
            </li>
          </ul>
        </nav>
      </section>
      <main className="inner-wrapper beer-detail-wrapper grid-container">
        <article className="detail-leftsection">
          <img
            className="detail-beer-image"
            src="./images/eunbiChoi/alexander-dinamarca-hplJX8Uy9Uo-unsplash.jpg"
            alt="아이피에이 생 맥주 이미지"
          />
        </article>
        <article className="detail-rightsection">
          <section className="detail-beer-info">
            <div className="detail-beer-info-header">
              <div className="detail-beer-header-wrapper">
                <h3>아이피에이</h3>
                <span>Indian Pale Ale</span>
              </div>
              <i className={ isFavorite? "fas fa-heart fa-2x is-favorite" : "far fa-heart fa-2x"} onClick={toggleHeart}></i>
            </div>
            <section className="detail-beer-description">
              <h4 className="visually-hidden">맛</h4>
              <div>
                달콤하고 부드러운 화이트 초콜릿 시럽과 에스프레소를 스팀 밀크와
                섞어 휘핑크림으로 마무리한 음료로 달콤함과 강렬한 에스프레소가
                부드럽게 어우러진 커피
              </div>
            </section>
            <section className="detail-beer-nutrition">
              <div className="detail-beer-nutrition-header">
                <h4>제품 영양 정보</h4>
                <div>Tall(톨) / 355ml (12 fl oz)</div>
              </div>
              <div className="detail-beer-nutrition-info grid-container">
                <ul className="nutrition-details-left">
                  <dl>
                    <li>
                      <dt>1회 제공량 (kcal)</dt>
                      <dd>345</dd>
                    </li>
                    <li>
                      <dt>포화지방 (g)</dt>
                      <dd>11</dd>
                    </li>
                    <li>
                      <dt>단백질 (g)</dt>
                      <dd>11</dd>
                    </li>
                  </dl>
                </ul>
                <ul className="nutrition-details-right">
                  <dl>
                    <li>
                      <dt>나트륨 (mg)</dt>
                      <dd>350</dd>
                    </li>
                    <li>
                      <dt>당류 (g)</dt>
                      <dd>35</dd>
                    </li>
                    <li>
                      <dt>카페인 (mg)</dt>
                      <dd>75</dd>
                    </li>
                  </dl>
                </ul>
                <mark>알레르기 유발 요인: 우유</mark>
              </div>
            </section>
          </section>
          <section className="detail-beer-review">
            <h4>리뷰</h4>
            <ul className="reviews-list">
              <li className="review-content">
                <span className="review-author">ebchoi </span>
                <span className="review-text">hello this is my review.</span>
              </li>
              <li className="review-content">
                <span className="review-author">beerbucker </span>
                <span className="review-text">
                  hello this is my beer review.
                </span>
              </li>
            </ul>
            <form action="{#}" className="review-form">
              <label for="review"></label>
              <input
                name="review"
                id="review"
                type="text"
                placeholder="리뷰를 입력해주세요."
              />
              <button
                id="review-button"
                className="visually-hidden"
                type="submit"
              >
                리뷰제출
              </button>
            </form>
          </section>
        </article>
      </main>
      <footer>
        <nav>
          <ul className="footer-nav-list">
            <li className="footer-nav-heading">
              <a href="{#}">COMPANY</a>
              <ul>
                <li>
                  <a href="{#}">한눈에 보기</a>
                </li>
                <li>
                  <a href="{#}">스타벅스 사명</a>
                </li>
                <li>
                  <a href="{#}">스타벅스 소개</a>
                </li>
                <li>
                  <a href="{#}">국내 뉴스룸</a>
                </li>
                <li>
                  <a href="{#}">세계의 스타벅스</a>
                </li>
                <li>
                  <a href="{#}">글로벌 뉴스룸</a>
                </li>
              </ul>
            </li>
            <li className="footer-nav-heading">
              <a href="{#}">CORPORATE SALES</a>
              <ul>
                <li>
                  <a href="{#}">단체 및 기업 구매 안내</a>
                </li>
              </ul>
            </li>
            <li className="footer-nav-heading">
              <a href="{#}">PARTNERSHIP</a>
              <ul>
                <li>
                  <a href="{#}">신규 입점 제의</a>
                </li>
                <li>
                  <a href="{#}">협력 고객사 등록 신청</a>
                </li>
              </ul>
            </li>
            <li className="footer-nav-heading">
              <a href="{#}">ONLINE COMMUNITY</a>
              <ul>
                <li>
                  <a href="{#}">페이스북</a>
                </li>
                <li>
                  <a href="{#}">트위터</a>
                </li>
                <li>
                  <a href="{#}">유튜브</a>
                </li>
                <li>
                  <a href="{#}">블로그</a>
                </li>
                <li>
                  <a href="{#}">인스타그램</a>
                </li>
              </ul>
            </li>
            <li className="footer-nav-heading">
              <a href="{#}">RECRUIT</a>
              <ul>
                <li>
                  <a href="{#}">채용 소개</a>
                </li>
                <li>
                  <a href="{#}">채용 지원하기</a>
                </li>
              </ul>
            </li>
            <li className="footer-nav-heading">
              <a href="{#}">WEBUCKS</a>
            </li>
          </ul>
        </nav>
      </footer>
    </section>
  );
};

export default Detail;
