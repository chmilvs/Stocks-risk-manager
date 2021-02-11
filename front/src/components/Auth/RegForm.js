import {useDispatch, useSelector} from 'react-redux'
import {useState} from 'react'
import {signUpFetchAC} from '../../redux/actionCreators/authAC'
import {Redirect} from 'react-router-dom'
import Cleave from 'cleave.js/react'
import './Auth.css'

function RegForm({ setState }) {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.auth.isLogged);
  const [inputDeposit, setInputDeposit] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [deposit, setDeposit] = useState('')

  const signUp = (event) => {
    event.preventDefault();
    dispatch(signUpFetchAC({ username, password, phone, email, deposit }));
  };
  if (isLogged) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="auth">
      <form onSubmit={signUp}>
        {inputDeposit ?
        <div>
        <div className="col-6 col-12-xsmall">
          <input value={username} onChange={(event) => setUsername(event.target.value)} type="text" name="username" placeholder="Логин" />
        </div>
        <div className="col-6 col-12-xsmall">
          <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" name="password" placeholder="Пароль" />
        </div>
        <div className="col-6 col-12-xsmall">
          <input value={phone} onChange={(event) => setPhone(event.target.value)} type="text" name="phone" placeholder="Номер телефона" />
        </div>
        <div className="col-6 col-12-xsmall">
          <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" name="email" placeholder="Адрес эл. почты" />
        </div>
        <a id="reg-button" onClick={() => setInputDeposit(!inputDeposit)} className="button primary small">Зарегистрироваться</a>
        <div><a className="link" onClick={setState}>У вас уже есть аккаунт?</a></div>
        </div>
          :
        <div className="deposit">
          <p>Введите размер вашего портфеля</p>
          <div className="col-6 col-12-xsmall">
          <Cleave placeholder="Введите размер депозита в USD"
                    name="deposit"
                    options={{numeral: true, numeralThousandsGroupStyle: 'thousand'}}
                    value={deposit}
                    onChange={(event) => setDeposit(event.target.value.replace(/,/gi, ''))}
                    />
            <button className="button primary small">Добавить</button>
          </div>
        </div>
}
      </form>
    </div>
  );
}

export default RegForm;
