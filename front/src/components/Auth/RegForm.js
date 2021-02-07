import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import './Auth.css'
import { SAVE_NEWUSER } from '../../redux/types'

function RegForm({ setState }) {
  const dispatch = useDispatch()

  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const signUp = (event) => {
    event.preventDefault()
    fetch('http://localhost:4000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password, email })
    })
    .then(res => res.json())
    .then(newuser => dispatch({ type: SAVE_NEWUSER, payload: newuser}))
  }
  return (
    <div className="auth">
      <form onSubmit={signUp}>
      <div className="col-6 col-12-xsmall">
          <input value={username} onChange={(event) => setUsername(event.target.value)} type="text" name="username" placeholder="Логин" />
        </div>
        <div className="col-6 col-12-xsmall">
          <input value={password} onChange={(event) => setPassword(event.target.value)}
            type="password"
            name="password"
            placeholder="Пароль"
          />
          </div>
        <div className="col-6 col-12-xsmall">
          <input type="text" name="name" placeholder="Имя" />
        </div>
        <div className="col-6 col-12-xsmall">
          <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" name="email" placeholder="Адрес эл. почты" />
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
