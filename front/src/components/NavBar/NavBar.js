import {Link, useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import './NavBar.css'
import {logOutAC} from '../../redux/actionCreators/authAC';


function NavBar({socket}) {
    const user = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const history = useHistory()
    const logOut = (event) => {
        event.preventDefault()
        socket.disconnect()
        dispatch(logOutAC())
        history.push('/')
    }

    const sendData = () => {
        let {currentUser} = user
        let {id,username} = currentUser
        let roomname = 'StockDiscussion'
            socket.connect()
            socket.emit("joinRoom", ({username , roomname}));
        }
    return (
      <header id="header">
        <h1 id="logo">
          <Link to="/" onClick={e=>socket.disconnect()}>Investhood Helper</Link>
        </h1>
        <nav id="nav">
          <ul>
            {user.isLogged ? (
              <>
              <li>
               <Link to='/update'>Обновить данные</Link>
               </li>
                <li>
                  <Link to="/riskpage" onClick={e=>socket.disconnect()} className="">
                    Расчет риска
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard" onClick={e=>socket.disconnect()} className="">
                    Профиль
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={logOut} className="">
                    Выйти
                  </Link>
                </li>
                  <li>
                      <Link onClick={sendData} to={`/chat/}`}>
                      Обсудить происходящее в чате :)
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
