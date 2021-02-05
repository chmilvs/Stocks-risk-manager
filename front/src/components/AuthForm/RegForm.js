import React from 'react';
import { Link } from 'react-router-dom'
import './Auth.css'

function RegForm({ setState }) {
  return (
    <div className="auth">
      <form>
      <div className="col-6 col-12-xsmall">
          <input type="text" name="username" id="name" placeholder="Имя пользователя" />
        </div>
        <div className="col-6 col-12-xsmall">
          <input
            type="password"
            name="password"
            id="email"
            placeholder="Пароль"
          />
          </div>
        <div className="col-6 col-12-xsmall">
          <input type="text" name="name" id="name" placeholder="Имя" />
        </div>
        <div className="col-6 col-12-xsmall">
          <input type="email" name="Email" id="email" placeholder="Адрес эл. почты" />
        </div>
        <Link to="/dashboard" className="button primary small">
          Зарегистрироваться
        </Link>
        <a className='link' onClick={setState}>
          У вас уже есть аккаунт?
        </a>
      </form>
    </div>
  );
}

export default RegForm;
