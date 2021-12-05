import React from 'react'
import { Link } from 'react-router-dom'

const BeerCard = ({beer}) => {
  return (
    <div className="beer-list-item" key={beer.id}>
      <dt>
        <Link to="/detail-eunbi">
          <img
            className="beer-img"
            src={beer.url}
            alt={beer.name} loading="lazy"
          />
        </Link>
      </dt>
      <dd className="beer-name">
        {beer.name}
        <i className="fas is-favorite fa-heart fa-lg"></i>
      </dd>
    </div>
  )
}

export default BeerCard;
