import React, { useState, useEffect } from 'react';
import './List.scss';
import Nav from '../../../components/Nav/Nav';
import CoffeeCard from '../CoffeeCard/CoffeeCard';

function List() {
  const [coffeeList, setCoffeeList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/taeYeong/listData.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setCoffeeList(data);
      });
  }, []);

  return (
    <div className="list">
      <Nav />
      <section id="cold-brew" className="container">
        <div className="notice">
          <p>
            콜드 브루 커피{' '}
            <img
              src="/images/taeYeong/coffee-cup.png"
              alt="커피"
              width="18px"
            />
            <span>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
          </p>
        </div>
        <ul className="coffee-list">
          {coffeeList[0] &&
            coffeeList[0].map((coffee, index) => {
              return (
                <CoffeeCard
                  src={coffee.imgSrc}
                  content={coffee.content}
                  key={index}
                />
              );
            })}
        </ul>
      </section>
      <section id="brewed-coffee" className="container">
        <div className="notice">
          <p>
            브루드 커피{' '}
            <img
              src="/images/taeYeong/coffee-cup.png"
              alt="커피"
              width="18px"
            />
            <span>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
          </p>
        </div>
        <ul className="coffee-list">
          {coffeeList[1] &&
            coffeeList[1].map((coffee, index) => {
              return (
                <CoffeeCard
                  src={coffee.imgSrc}
                  content={coffee.content}
                  key={index}
                />
              );
            })}
        </ul>
      </section>
      {/* <script src="./js/list.js"></script> */}
    </div>
  );
}

export default List;
