import { Link } from 'react-router-dom'
import './Auth.css'

function LoginForm({ setState }) {
  return (
    <div className="auth">
      <form>
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
        <Link to="/dashboard" className="button primary small">
          Войти
        </Link>
        <a className='link' onClick={setState}>У вас еще нет аккаунта?</a>
      </form>
    </div>
  );
}

export default LoginForm;
