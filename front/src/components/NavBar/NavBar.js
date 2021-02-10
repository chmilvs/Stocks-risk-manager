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
        dispatch(logOutAC())
        history.push('/')
    }

    // const sendData = () => {
    //     let {currentUser} = user
    //     let {id,username} = currentUser
    //     let roomname = 'StockDiscussion'
    //         socket.connect()
    //         socket.emit("joinRoom", ({username , roomname}));
    //     }
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
               <Link to='/update'>Изменить профайл</Link>
               </li>
                <li>
                  <Link to="/riskpage" className="">
                    Расчет риска
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard"  className="">
                    Профиль
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={logOut} className="">
                    Выйти
                  </Link>
                </li>
                  {/*<li>*/}
                  {/*    <Link onClick={sendData} to={`/chat/}`}>*/}
                  {/*    Обсудить происходящее в чате :)*/}
                  {/*    </Link>*/}
                  {/*</li>*/}
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
