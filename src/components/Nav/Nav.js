import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <header className="inner-wrapper">
      <h1>BeerBucks</h1>
      <nav>
        <ul className="nav-list">
          <li><Link className="nav-list-links" to="{#}">BEER</Link></li>
          <li><Link className="nav-list-links" to="{#}">MENU</Link></li>
          <li><Link className="nav-list-links" to="{#}">STORE</Link></li>
          <li><Link className="nav-list-links" to="{#}">WHAT'S NEW</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav;