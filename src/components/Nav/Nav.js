import './Nav.scss';

const Nav = () => {
  return (
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
  )
}

export default Nav;