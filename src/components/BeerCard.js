import React from 'react'
import { Link } from 'react-router-dom'

const BeerCard = ({beer, key, name, src}) => {
  return (
    <li className="beer-list-item" key={key}>
      <div className="beer-image">
        <Link to="/detail-eunbi">
          <img
            className="beer-img"
            src={src}
            alt={name} loading="lazy"
          />
        </Link>
      </div>
      <figcaption className="beer-name">
        {name}
        <i className="fas is-favorite fa-heart fa-lg"></i>
      </figcaption>
    </li>
  )
}

export default BeerCard;
