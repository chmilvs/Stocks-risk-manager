import {Link, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import './NavBar.css'
import {logOutAC} from '../../redux/actionCreators/authAC';

function NavBar() {
    const user = useSelector(state => state.auth)
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
               <Link to='/update'>Обновить данные</Link>
               </li>
                <li>
                  <Link to="/riskpage" className="">
                    Расчет риска
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard" className="">
                    Профиль
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={logOut} className="">
                    Выйти
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link to="/auth" className="">
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
