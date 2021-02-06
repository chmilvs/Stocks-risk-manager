import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
  return (
    <header id="header">
      <h1 id="logo"><Link to="/">Investhood Helpier</Link></h1>
      <nav id="nav">
        <ul>
            <li><Link to="/riskpage" className="button primary">Riskpage</Link></li>
            <li><Link to="/dashboard" className="button primary">Dashboard</Link></li>
            <li><Link to="/auth" className="button primary">Войти</Link></li>
        </ul>
      </nav>
  </header>
  );
}

export default NavBar;
