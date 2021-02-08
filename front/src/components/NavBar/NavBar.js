import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './NavBar.css'
import { logOutAC } from '../../redux/actionCreators/authAC';

function NavBar() {
  const user = useSelector(state => state.auth)
  console.log(user);
  const dispatch = useDispatch()
  const history = useHistory()
  const logOut = (event) => {
    event.preventDefault()
    dispatch(logOutAC())
    history.push('/')
  }
  return (
    <header id="header">
      <h1 id="logo">
        <Link to="/">Investhood Helper</Link>
      </h1>
      <nav id="nav">
        <ul>
          {user.isLogged ? (
            <>
              <li>
                <Link to="/riskpage" className="button primary">
                  Расчет риска
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="button primary">
                  Профиль
                </Link>
              </li>
              <li>
                <Link to={'/'} onClick={logOut} className="button primary">
                  Выйти
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/auth" className="button primary">
                Войти
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
