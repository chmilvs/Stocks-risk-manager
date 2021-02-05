import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
  return (
    <header id="header">
      <h1 id="logo"><Link to="/">Investhood Helpier</Link></h1>
      <nav id="nav">
        <ul>
          <li><Link to="/auth" className="button primary">Log In</Link></li>
        </ul>
      </nav>
  </header>
  );
}

export default NavBar;
