import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory}from 'react-router-dom'
import {updateOneFetchAC} from "../../../redux/actionCreators/authAC";

function UpdateForm() {
  // const history = useHistory()
  const data = useSelector(state => state.auth.currentUser)
  const dispatch =useDispatch()
  const handleSubmit = (e) =>{
    e.preventDefault()
    const {username:{value:username},phone:{value:phone},email:{value:email},deposit:{value:deposit}} = e.target
    dispatch(updateOneFetchAC({username,phone,email,deposit}))
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
      <label>Введите новые данные:</label>
        <label>Логин:</label>
        <div className="col-6 col-12-xsmall">
          <input type="text" minLength={5} name="username" defaultValue={data.username} />
        </div>
        <label>Телефон:</label>
        <div className="col-6 col-12-xsmall">
          <input type="text" name="phone" defaultValue={data.phone} />
        </div>
        <label>Email адрес:</label>
        <div className="col-6 col-12-xsmall">
          <input type="email" name="email" defaultValue={data.email} />
        </div>
        <label>Сумма депозита:</label>
        <div className="col-6 col-12-xsmall">
          <input type="number"  name="deposit" defaultValue={data.deposit} />
        </div>
        <button className="button primary small">Обновить</button>
      </form>
    </>
  );
}

export default UpdateForm;
