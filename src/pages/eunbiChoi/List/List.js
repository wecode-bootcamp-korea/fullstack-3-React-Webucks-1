import React from "react";
import "../../../styles/reset.scss"
import "./List.scss";

const List = (beerData) => {
  return (
    <div className="list-container">
      <header className="inner-wrapper">
        <h1>BeerBucks</h1>
        <nav>
          <ul className="nav-list">
            <li><a className="nav-list-links" href="{#}">BEER</a></li>
            <li><a className="nav-list-links" href="{#}">MENU</a></li>
            <li><a className="nav-list-links" href="{#}">STORE</a></li>
            <li><a className="nav-list-links" href="{#}">WHAT'S NEW</a></li>
          </ul>
        </nav>
      </header>
      <section className="inner-wrapper draft-list-wrapper">
        <h2>
          드래프트 맥주 🍺 <span>논알콜 샷 추가 가능(일부 음료 제외)</span>
        </h2>
        <dl className="beer-list grid-container">
          <div className="beer-list-item">
            <dt>
              <a href="./detail.html">
                <img
                  className="beer-img"
                  src="./images/eunbiChoi/alexander-dinamarca-hplJX8Uy9Uo-unsplash.jpg"
                  alt="아이피이" loading="lazy"
                />
              </a>
            </dt>
            <dd className="beer-name">
              아이피에이
              <i className="fas is-favorite fa-heart fa-lg"></i>
            </dd>
          </div>
          <div className="beer-list-item">
            <dt>
              <a href="{#}">
                <img
                  src="./images/eunbiChoi/brad_stallcup_beer.jpeg"
                  alt="독도에일" loading="lazy"
                />
              </a>
            </dt>
            <dd className="beer-name">
              독도에일
              <i className="far fa-heart fa-lg"></i>
            </dd>
          </div>
          <div className="beer-list-item">
            <dt>
              <a href="{#}">
                <img
                  src="./images/eunbiChoi/engin-akyurt-3ORoQEJY9LA-unsplash.jpg"
                  alt="바스스타우트" loading="lazy"
                />
              </a>
            </dt>
            <dd className="beer-name">
              바리스타우트
              <i className="far fa-heart fa-lg"></i>
            </dd>
          </div>
          <div className="beer-list-item">
            <dt>
              <a href="{#}">
                <img
                  src="./images/eunbiChoi/bence-boros-8T5UAV6KkZA-unsplash.jpg"
                  alt="라거" loading="lazy"
                />
              </a>
            </dt>
            <dd className="beer-name">
              라거
              <i className="far fa-heart fa-lg"></i>
            </dd>
          </div>
          <div className="beer-list-item">
            <dt>
              <a href="{#}">
                <img
                  src="./images/eunbiChoi/blake-wisz-pyschm-tRpU-unsplash.jpg"
                  alt="서울 생활" loading="lazy"
                />
              </a>
            </dt>
            <dd className="beer-name">
              서울 생활 맥주
              <i className="far fa-heart fa-lg"></i>
            </dd>
          </div>
          <div className="beer-list-item">
            <dt>
              <a href="{#}">
                <img
                  src="./images/eunbiChoi/giovanna-gomes-Qy2KMPRV3X4-unsplash.jpg"
                  alt="인생" loading="lazy"
                />
              </a>
            </dt>
            <dd className="beer-name">
              인생 맥주
              <i className="far fa-heart fa-lg"></i>
            </dd>
          </div>
          <div className="beer-list-item">
            <dt>
              <a href="{#}">
                <img
                  src="./images/eunbiChoi/jonathan-sanchez-XSL6t68Aw30-unsplash.jpg"
                  alt="오늘 밤 스타우트" loading="lazy"
                />
              </a>
            </dt>
            <dd className="beer-name">
              오늘밤 스타우트
              <i className="far fa-heart fa-lg"></i>
            </dd>
          </div>
          <div className="beer-list-item">
            <dt>
              <a href="{#}">
                <img
                  src="./images/eunbiChoi/lorenzo-rui-NfjfNQV47OU-unsplash.jpg"
                  alt="토종 다크 라거" loading="lazy"
                />
              </a>
            </dt>
            <dd className="beer-name">
              토종 다크 라거
              <i className="far fa-heart fa-lg"></i>
            </dd>
          </div>
          <div className="beer-list-item">
            <dt>
              <a href="{#}">
                <img
                  src="./images/eunbiChoi/josh-olalde-kyENBzWHg9s-unsplash.jpg"
                  alt="비단 밀맥주 이미지"
                />
              </a>
            </dt>
            <dd className="beer-name">
              비단 밀맥
              <i className="far fa-heart fa-lg"></i>
            </dd>
          </div>
          <div className="beer-list-item">
            <dt>
              <a href="{#}">
                <img
                  src="./images/eunbiChoi/matt-palmer-lGzhgzkN6UI-unsplash.jpg"
                  alt="광안리 위트" loading="lazy"
                />
              </a>
            </dt>
            <dd className="beer-name">
              광안리 위트
              <i className="far fa-heart fa-lg"></i>
            </dd>
          </div>
          <div className="beer-list-item">
            <dt>
              <a href="{#}">
                <img
                  src="./images/eunbiChoi/tamas-pap-0DpHBTz8tkM-unsplash.jpg"
                  alt="생활 밀착" loading="lazy"
                />
              </a>
            </dt>
            <dd className="beer-name">
              생활밀착
              <i className="far fa-heart fa-lg"></i>
            </dd>
          </div>
          <div className="beer-list-item">
            <dt>
              <a href="{#}">
                <img
                  src="./images/eunbiChoi/meritt-thomas-XStd_1-BNi8-unsplash.jpg"
                  alt="금빛 라거" loading="lazy"
                />
              </a>
            </dt>
            <dd className="beer-name">
              금빛라거
              <i className="far fa-heart fa-lg"></i>
            </dd>
          </div>
        </dl>
      </section>
      <section className="inner-wrapper bottle-list-wrapper">
        <h2>
          병 맥주 🍺 <span>논알콜 샷 추가 가능(일부 음료 제외)</span>
        </h2>
        <dl className="beer-list grid-container">
          <div className="beer-list-item">
            <dt>
              <a className="beer-img" href="{#}">
                <img
                  src="./images/eunbiChoi/nikhil-shetty-p5_XIonZdLc-unsplash.jpg"
                  alt="무스코카 병" loading="lazy"
                />
              </a>
            </dt>
            <dd className="beer-name">
              무스코카
              <i className="far fa-heart fa-lg"></i>
            </dd>
          </div>
          <div className="beer-list-item">
            <dt>
              <a href="{#}">
                <img
                  src="./images/eunbiChoi/chino-rocha-eWCllSM009k-unsplash.jpg"
                  alt="기네스 병" loading="lazy"
                />
              </a>
            </dt>
            <dd className="beer-name">
              기네스
              <i className="far fa-heart fa-lg"></i>
            </dd>
          </div>
          <div className="beer-list-item">
            <dt>
              <a href="{#}">
                <img
                  src="./images/eunbiChoi/dorrell-tibbs-M_-o4PsMXDc-unsplash.jpg"
                  alt="블루문 병" loading="lazy"
                />
              </a>
            </dt>
            <dd className="beer-name">
              블루문
              <i className="far fa-heart fa-lg"></i>
            </dd>
          </div>
          <div className="beer-list-item">
            <dt>
              <a href="{#}">
                <img
                  src="./images/eunbiChoi/neonbrand-EHbFnSIj1Qw-unsplash.jpg"
                  alt="스텔라 병" loading="lazy"
                />
              </a>
            </dt>
            <dd className="beer-name">
              스텔라
              <i className="far fa-heart fa-lg"></i>
            </dd>
          </div>
          <div className="beer-list-item">
            <dt>
              <a href="{#}">
                <img
                  src="./images/eunbiChoi/eeshan-garg-KYuANAfgTWA-unsplash.jpg"
                  alt="에딩거 병" loading="lazy"
                />
              </a>
            </dt>
            <dd className="beer-name">
              에딩거
              <i className="far fa-heart fa-lg"></i>
            </dd>
          </div>
          <div className="beer-list-item">
            <dt>
              <a href="{#}">
                <img
                  src="./images/eunbiChoi/allec-gomes-XP4qTzYzwtU-unsplash.jpg"
                  alt="하이네켄 병" loading="lazy"
                />
              </a>
            </dt>
            <dd className="beer-name">
              하이네켄
              <i className="far fa-heart fa-lg"></i>
            </dd>
          </div>
          <div className="beer-list-item">
            <dt>
              <a href="{#}">
                <img
                  src="./images/eunbiChoi/fuad-obasesan-TMDxooEtXpo-unsplash.jpg"
                  alt="버드와이저 병" loading="lazy"
                />
              </a>
            </dt>
            <dd className="beer-name">
              버드와이저
              <i className="far fa-heart fa-lg"></i>
            </dd>
          </div>
          <div className="beer-list-item">
            <dt>
              <a href="{#}">
                <img
                  src="./images/eunbiChoi/kristaps_solims_beer.jpg"
                  alt="코로나 병" loading="lazy"
                />
              </a>
            </dt>
            <dd className="beer-name">
              코로나
              <i className="far fa-heart fa-lg"></i>
            </dd>
          </div>
        </dl>
      </section>
    </div>
  );
};

export default List;
