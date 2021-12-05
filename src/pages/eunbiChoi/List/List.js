import React, { useState, useEffect } from "react";
import Nav from "../../../components/Nav/Nav";
import BeerCard from "../../../components/BeerCard"
import "../../../styles/reset.scss"
import "./List.scss";

const beerData = [
  {
    "id": 1,
    "category": "draft",
    "name": "아이피에이",
    "url": "./images/eunbiChoi/alexander-dinamarca-hplJX8Uy9Uo-unsplash.jpg",
    "favorite": false,
  },
  {
    "id": 2,
    "category": "draft",
    "name": "라거",
    "url": "./images/eunbiChoi/giovanna-gomes-Qy2KMPRV3X4-unsplash.jpg",
    "favorite": false,
  },
  {
    "id": 3,
    "category": "draft",
    "name": "독도에일",
    "url": "./images/eunbiChoi/tamas-pap-0DpHBTz8tkM-unsplash.jpg",
    "favorite": false,
  },
  {
    "id": 4,
    "category": "draft",
    "name": "인생맥주",
    "url": "./images/eunbiChoi/brad_stallcup_beer.jpeg",
    "favorite": false,
  },
  {
    "id": 5,
    "category": "draft",
    "name": "서울 생활 맥주",
    "url": "./images/eunbiChoi/engin-akyurt-3ORoQEJY9LA-unsplash.jpg",
    "favorite": false,
  },
  {
    "id": 6,
    "category": "draft",
    "name": "바리스타우트",
    "url": "./images/eunbiChoi/jonathan-sanchez-XSL6t68Aw30-unsplash.jpg",
    "favorite": false,
  },
  {
    "id": 7,
    "category": "draft",
    "name": "비단 밀맥",
    "url": "./images/eunbiChoi/josh-olalde-kyENBzWHg9s-unsplash.jpg",
    "favorite": false,
  },
  {
    "id": 8,
    "category": "draft",
    "name": "생활밀착",
    "url": "./images/eunbiChoi/matt-palmer-lGzhgzkN6UI-unsplash.jpg",
    "favorite": false,
  },
  {
    "id": 9,
    "category": "draft",
    "name": "금빛라거",
    "url": "./images/eunbiChoi/bence-boros-8T5UAV6KkZA-unsplash.jpg",
    "favorite": false,
  },
  {
    "id": 10,
    "category": "draft",
    "name": "광안리 위트",
    "url": "./images/eunbiChoi/blake-wisz-pyschm-tRpU-unsplash.jpg",
    "favorite": false,
  },
  {
    "id": 11,
    "category": "bottled",
    "name": "무스코카",
    "url": "./images/eunbiChoi/nikhil-shetty-p5_XIonZdLc-unsplash.jpg",
    "favorite": false,
  },
  {
    "id": 12,
    "category": "bottled",
    "name": "기네스",
    "url": "./images/eunbiChoi/chino-rocha-eWCllSM009k-unsplash.jpg",
    "favorite": false,
  },
  {
    "id": 13,
    "category": "bottled",
    "name": "블루문",
    "url": "./images/eunbiChoi/dorrell-tibbs-M_-o4PsMXDc-unsplash.jpg",
    "favorite": false,
  },
  {
    "id": 14,
    "category": "bottled",
    "name": "스텔라",
    "url": "./images/eunbiChoi/neonbrand-EHbFnSIj1Qw-unsplash.jpg",
    "favorite": false,
  },
  {
    "id": 15,
    "category": "bottled",
    "name": "에딩거",
    "url": "./images/eunbiChoi/eeshan-garg-KYuANAfgTWA-unsplash.jpg",
    "favorite": false,
  },
  {
    "id": 16,
    "category": "bottled",
    "name": "하이네켄",
    "url": "./images/eunbiChoi/allec-gomes-XP4qTzYzwtU-unsplash.jpg",
    "favorite": false,
  },
  {
    "id": 17,
    "category": "bottled",
    "name": "버드와이저",
    "url": "./images/eunbiChoi/fuad-obasesan-TMDxooEtXpo-unsplash.jpg",
    "favorite": false,
  },
  {
    "id": 18,
    "category": "bottled",
    "name": "코로나",
    "url": "./images/eunbiChoi/kristaps_solims_beer.jpg",
    "favorite": false,
  }

]

const draftBeer = beerData.filter((beer) => (beer.category === "draft"))
const bottledBeer = beerData.filter((beer) => (beer.category === "bottled"))

const List = () => {

  return (
    <div className="list-container">
      <Nav />
      <section className="inner-wrapper draft-list-wrapper">
        <h2>
          드래프트 맥주 🍺 <span>논알콜 샷 추가 가능(일부 음료 제외)</span>
        </h2>
        <dl className="beer-list grid-container">
          {draftBeer.map((draft) => (<BeerCard beer={draft} />
          ))}
        </dl>
      </section>
      <section className="inner-wrapper bottle-list-wrapper">
        <h2>
          병 맥주 🍺 <span>논알콜 샷 추가 가능(일부 음료 제외)</span>
        </h2>
        <dl className="beer-list grid-container">
        <dl className="beer-list grid-container">
          {bottledBeer.map((bottled) => (<BeerCard beer={bottled} />
          ))}
        </dl>
        </dl>
      </section>
    </div>
  );
};

export default List;
