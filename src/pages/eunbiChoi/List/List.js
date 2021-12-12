import React, { useState, useEffect } from 'react';
import Nav from '../../../components/Nav/Nav';
import Footer from '../../../components/Footer/Footer'
import BeerCard from '../../../components/BeerCard/BeerCard'
import '../../../styles/reset.scss'
import './List.scss';

const List = () => {
  const [beerList, setBeerList] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3000/data/eunbiChoi/data.json')
      .then(res => res.json())
      .then(data => setBeerList(data))
    },[])  

  return (
    <div className="List">
      <Nav />
      <section className='inner-wrapper draft-list-wrapper'>
        <h2>
          드래프트 맥주 🍺 <span>논알콜 샷 추가 가능(일부 음료 제외)</span>
        </h2>
        <ul className='beer-list grid-container'>
          {
            beerList
            .filter(beer => beer.category === "draft")
            .map(draft => <BeerCard 
              key={draft.id}
              name={draft.name} 
              src={draft.url}/>
            )
          }
        </ul>
      </section>
      <section className='inner-wrapper bottle-list-wrapper'>
        <h2>
          병 맥주 🍺 <span>논알콜 샷 추가 가능(일부 음료 제외)</span>
        </h2>
        <ul className='beer-list grid-container'>
          {
            beerList
            .filter(beer => beer.category === "bottled")
            .map(bottled => <BeerCard 
              key={bottled.id} 
              name={bottled.name}
              src={bottled.url}/>
            )
          }
        </ul>
      </section>
      <Footer />
    </div>
  );
}

export default List;
