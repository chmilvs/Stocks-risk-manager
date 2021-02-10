import React from 'react';
import { useSelector } from 'react-redux';

function UpdaitingForm() {
  const data = useSelector(state => state.auth.currentUser)
  return (
    <>
      <form>
      <label>Введите новые данные:</label>
        <div className="col-6 col-12-xsmall">
          <input type="text" name="username" placeholder={`${data.username}`} />
        </div>
        <div className="col-6 col-12-xsmall">
          <input type="password" name="password" placeholder="Новый пароль" />
        </div>
        <div className="col-6 col-12-xsmall">
          <input type="text" name="phone" placeholder={`${data.phone}`} />
        </div>
        <div className="col-6 col-12-xsmall">
          <input type="email" name="email" placeholder={`${data.email}`} />
        </div>
        <div className="col-6 col-12-xsmall">
          <input type="email" name="email" placeholder={`${data.deposit}`} />
        </div>
        <button className="button primary small">Обновить</button>
      </form>
    </>
  );
}

export default UpdaitingForm;
