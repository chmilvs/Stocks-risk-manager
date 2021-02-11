import {Link, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {logOutAC} from '../../redux/actionCreators/authAC';
import {useEffect} from 'react'
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css'
import './NavBar.css'


function NavBar() {
    const user = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const history = useHistory()
    const logOut = (event) => {
        event.preventDefault()
        dispatch(logOutAC())
        history.push('/')
    }

    useEffect(() => {
        document.addEventListener('DOMContentLoaded', function() {
            let elems = document.querySelectorAll('.sidenav');
            let instances = M.Sidenav.init(elems, {});
        });
    }, []);

    return (
        <>
            <nav>
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo"><Link to="/">Toffee</Link></a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
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
                                    </>
                                ) : (
                                    <li>
                                        <Link to="/auth" className="">
                                            Войти
                                        </Link>
                                    </li>
                                )}
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                    {user.isLogged ? (
                        <>
                            <li className="sidenav-li">
                                <Link to='/update'>Изменить профайл</Link>
                            </li>
                            <li className="sidenav-li">
                                <Link to="/riskpage" className="">
                                    Расчет риска
                                </Link>
                            </li>
                            <li className="sidenav-li">
                                <Link to="/dashboard"  className="">
                                    Профиль
                                </Link>
                            </li>
                            <li className="sidenav-li">
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
        </>
    );
}

export default NavBar;
