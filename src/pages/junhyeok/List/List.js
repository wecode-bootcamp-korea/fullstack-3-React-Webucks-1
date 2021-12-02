import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./List.scss";

function List() {
  useEffect(() => {
    fetch("http://localhost:3000/data/junhyeok/data.json")
      .then((res) => res.json())
      .then((res) => setMockdata(res));
  }, []);

  let [mockdata, setMockdata] = useState([]);

  return (
    <div className="junhyeok">
      <Nav />
      <div className="List">
        {/* 콜드브루 */}
        <div className="list-items">
          <div className="title">
            콜드 브루 커피
            <img src="./images/junhyeok/cup.png" alt="컵이미지" />
            <span>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
          </div>
          <div className="상품들">
            {mockdata.cold &&
              mockdata.cold.map((e, i) => {
                return <CoffeeCard key={i} item={e} />;
              })}
          </div>
        </div>
        {/* 아메리카노 */}
        <div className="list-items">
          <div className="title">
            에스프레소
            <img src="./images/junhyeok/cup.png" alt="컵이미지" />
            <span>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
          </div>
          <div className="상품들">
            {mockdata.shot &&
              mockdata.shot.map((e, i) => {
                return <CoffeeCard key={i} item={e} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

// 커피 리스트 펼치기
function CoffeeCard(props) {
  let [like, setlike] = useState("🤍");
  return (
    <div className="add">
      <img src={props.item.img} alt={props.item.name} />
      <div className="name">
        <h4>{props.item.name}</h4>
        <span
          className="like"
          onClick={(e) => {
            like === "🤍" ? setlike("❤️") : setlike("🤍");
          }}
        >
          {like}
        </span>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <header>
      <div className="nav">
        <h3>WeBucks</h3>
        <ul>
          <li>
            <Link to="/Detail-junhyeok">Detail</Link>
          </li>
          <li>
            <Link to="/List-junhyeok">MENU</Link>
          </li>
          <li>STORE</li>
          <li>
            <Link to="/login-junhyeok">Login</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default List;
