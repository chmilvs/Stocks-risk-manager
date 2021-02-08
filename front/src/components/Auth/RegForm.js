import { useDispatch } from 'react-redux'
import { signUpFetchAC } from '../../redux/actionCreators/authAC'
import './Auth.css'

function RegForm({ setState }) {
  const dispatch = useDispatch()

  const signUp = (event) => {
    event.preventDefault()
    const { username: {value: username}, password: {value: password}, phone: {value: phone}, email: {value: email} } = event.target
    dispatch(signUpFetchAC({ username, password, phone, email }))
  }
  return (
    <div className="auth">
      <form onSubmit={signUp}>
      <div className="col-6 col-12-xsmall">
          <input type="text" name="username" placeholder="Логин" />
        </div>
        <div className="col-6 col-12-xsmall">
          <input
            type="password"
            name="password"
            placeholder="Пароль"
          />
          </div>
        <div className="col-6 col-12-xsmall">
          <input type="text" name="phone" placeholder="Номер телефона" />
        </div>
        <div className="col-6 col-12-xsmall">
          <input type="email" name="email" placeholder="Адрес эл. почты" />
        </div>
        <button className="button primary small">
          Зарегистрироваться
        </button>
        <a className='link' onClick={setState}>
          У вас уже есть аккаунт?
        </a>
      </form>
    </div>
  );
}

export default RegForm;
