import {useDispatch, useSelector} from 'react-redux';
import {logInFetchAC} from '../../redux/actionCreators/authAC';
import {Redirect} from 'react-router-dom'
import './Auth.css'

function LoginForm({setState}) {
    const isLogged = useSelector(state => state.auth.isLogged)
    const error = useSelector(state => state.errors)
    console.log(error);
    const dispatch = useDispatch()
    const logIn = (event) => {
        event.preventDefault()
        const {username: {value: username}, password: {value: password}} = event.target
        dispatch(logInFetchAC({username, password}))
    }
    if (isLogged) {
        return <Redirect to='/dashboard'/>
    }

    return (
        <div className="auth">
            <form onSubmit={logIn} autoComplete={"off"}>
                <div className="col-6 col-12-xsmall">
                    <input type="text" name="username" placeholder="Логин"/>
                </div>
                <div className="errors">{error.text == 'Такой пользователь отсутствует!' ? error.text : <></>}</div>
                <div className="col-6 col-12-xsmall">
                    <input
                        type="password"
                        name="password"
                        placeholder="Пароль"
                    />
                </div>
                <div className="errors">{error.text == 'Неверный пароль!' ? error.text : <></>}</div>
                <button className="button primary small">
                    Войти
                </button>
                <a className='link' onClick={setState}>У вас еще нет аккаунта?</a>
            </form>
        </div>
    );
}

export default LoginForm;
