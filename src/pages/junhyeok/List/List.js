import React, { useState, useEffect } from 'react';
import CoffeeCard from '../Component/CoffeeCard';
import { Nav } from '../Component/NavAndBottom';
import './List.scss';

function List() {
  useEffect(() => {
    fetch('http://localhost:3000/data/junhyeok/data.json')
      .then((res) => res.json())
      .then((res) => setMockdata(res));
  }, []);

  let [mockdata, setMockdata] = useState([]);

  return (
    <div className="junhyeok">
      <Nav />
      <div className="List">
        {/* 콜드브루 */}
        {Coffee(mockdata, '콜드 브루 커피', 'cold')}
        {/* 아메리카노 */}
        {Coffee(mockdata, '아메리카노', 'shot')}
      </div>
    </div>
  );
}

//  반복요소 줄이기
function Coffee(mockdata, name, kind) {
  return (
    <div className="list-items">
      <div className="title">
        {name}
        <img src="./images/junhyeok/cup.png" alt="컵이미지" />
        <span>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
      </div>
      <div className="상품들">
        {mockdata[kind] &&
          mockdata[kind].map((e, i) => {
            return <CoffeeCard key={i} item={e} />;
          })}
      </div>
    </div>
  );
}

export default List;
